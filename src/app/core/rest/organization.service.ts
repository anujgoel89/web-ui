/*
 * Lumeer: Modern Data Definition and Processing Platform
 *
 * Copyright (C) since 2017 Answer Institute, s.r.o. and/or its affiliates.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Organization} from '../dto';
import {FetchFailedError} from '../error/fetch-failed.error';
import {NetworkError} from '../error/network.error';
import {PermissionService} from './permission.service';

@Injectable()
export class OrganizationService extends PermissionService {

  public getOrganizations(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(this.apiPrefix()).pipe(
      catchError(OrganizationService.catchGetCollectionsError)
    );
  }

  public getOrganization(code: string): Observable<Organization> {
    return this.httpClient.get<Organization>(this.apiPrefix(code));
  }

  public deleteOrganization(code: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete(this.apiPrefix(code), {observe: 'response', responseType: 'text'});
  }

  public createOrganization(organization: Organization): Observable<Organization> {
    return this.httpClient.post<Organization>(this.apiPrefix(), organization);
  }

  public editOrganization(code: string, organization: Organization): Observable<Organization> {
    return this.httpClient.put<Organization>(this.apiPrefix(code), organization);
  }

  protected actualApiPrefix(): string {
    const organizationCode = this.workspace.organizationCode;

    return this.apiPrefix(organizationCode);
  }

  private apiPrefix(code?: string): string {
    return `/${API_URL}/rest/organizations${code ? `/${code}` : ''}`;
  }

  private static catchGetCollectionsError(error: HttpErrorResponse): ErrorObservable {
    if (error instanceof Error) {
      throw new NetworkError();
    } else {
      throw new FetchFailedError('Organizations');
    }
  }

}
