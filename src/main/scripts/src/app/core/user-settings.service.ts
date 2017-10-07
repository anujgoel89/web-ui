/*
 * -----------------------------------------------------------------------\
 * Lumeer
 *
 * Copyright (C) since 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * -----------------------------------------------------------------------/
 */

import {Injectable} from '@angular/core';

import {UserSettings} from './dto/user.settings';
import {LocalStorageService} from 'ng2-webstorage';

const USER_SETTINGS = 'user-settings';

@Injectable()
export class UserSettingsService {

  constructor(private storageService: LocalStorageService) {
  }

  public getUserSettings(): UserSettings {
    return this.storageService.retrieve(USER_SETTINGS) || {};
  }

  public updateUserSettings(userSettings: UserSettings) {
    this.storageService.store(USER_SETTINGS, userSettings);
  }

}