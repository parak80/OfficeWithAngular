
class AppSettings {
    config?: AppConfig;
  }

  export const APP_SETTINGS: AppSettings = {

  };

  export interface AppConfig {
    appTitle: string;
    appLogo: string;
    columns: {
      documentId: ColumnHeader[],
      name: ColumnHeader[]
    };
    pageSize: {[key: string]: number};
    formats: PropertyFormats;
    dafaultDateSelection: string;
    inputFields: {
      documentId: ColumnHeader[],
      name: ColumnHeader[]
    };
    orderBy: {
      documentId: string;
      name: string;
    };
  }

  export interface ColumnHeader {
    prop: string;
    title: string;
  }

  export interface PropertyFormats {
    [key: string]: {
        filter: string;
        format: string;
    };
  }

  export class AppConfigService {

    constructor(private _config: AppConfig) { }

    getAppTitle() {
      if (this._config) {
        return this._config.appTitle;
      }
      return '';
    }

    getPageSize(key?: string) {
      if (this._config) {
        if (key && this._config.pageSize[key]) {
          return this._config.pageSize[key];
        }
        return this._config.pageSize.default || 10;
      }
      return 5;
    }

    getColumns(type: string) {
      if (this._config) {
        return this._config.columns[type];
      }
    }

    getFormats() {
      if (this._config) {
        return this._config.formats;
      }
      return <PropertyFormats>{};
    }

    getDefaultDateSelection() {
      if (this._config) {
        return this._config.dafaultDateSelection;
      }
      return '';
    }

    getInputFields(type: string) {
      if (this._config) {
        return this._config.inputFields[type];
      }
    }

    getDefaultOrderBy(type: string) {
      if (this._config) {
        return this._config.orderBy[type];
      }
      return new Array<string>();
    }
  }
