export interface TuyaAssetInfo {
  assetId: string;
  parent_asset_id: string;
  asset_name: string;
  asset_full_name: string;
}

export interface TuyaAssetGetParams {
  assetId: string;
}

export interface TuyaAssetListParams {
  assetId: string | string[];
}

export interface TuyaAssetChildAssetsParams {
  asset_id: string;
  last_row_key?: string;
  page_size: number;
}

export interface TuyaAssetChildAssetsResult {
  list: {
    asset_id: string;
    parent_asset_id: string;
    asset_name: string;
    asset_full_name: string;
  }[];
  page_size: string;
  has_next: boolean;
  last_row_key: string;
}

export interface TuyaAssetDevicesParams {
  asset_id: string;
  last_row_key?: string;
  page_size: number;
}

export interface TuyaAssetDevicesResult {
  list: {
    device_id: string;
    asset_id: string;
    asset_name: string;
  }[];
  last_row_key: string;
  page_size: string;
  has_next: boolean;
}

export interface TuyaAssetAddParams {
  name: string;
  meta_id?: string;
  parent_asset_id?: string;
}

export interface TuyaAssetUpdateParams {
  asset_id: string;
  name: string;
  meta_id?: string;
}

export interface TuyaAssetDeleteParams {
  asset_id: string;
}
