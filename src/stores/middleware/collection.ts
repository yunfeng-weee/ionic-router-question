import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { ICollection } from "../../models/collection";
import { IPhoto } from "../../models/photo";
import CollectionsService, {
  ListCollectionsParams,
} from "../../api/collections";
import { CollectionPhotosParams } from "../../api/photos";

export const fetchCollections = createAsyncThunk<
  ICollection[],
  ListCollectionsParams
>("collections/fetchCollections", async ({ page, per_page }) => {
  const response: AxiosResponse = await CollectionsService.listCollections({
    page,
    per_page,
  });
  return response.data;
});

export const getCollection = createAsyncThunk<ICollection, string>(
  "collections/getCollection",
  async (id) => {
    const response: AxiosResponse = await CollectionsService.getCollection(id);
    return response.data;
  }
);

export const getCollectionPhotos = createAsyncThunk<
  IPhoto[],
  {
    id: string;
    params: CollectionPhotosParams;
  }
>("collections/getCollectionPhotos", async ({ id, params }) => {
  const response: AxiosResponse = await CollectionsService.getCollectionPhotos(
    id,
    params
  );
  return response.data;
});

export const getRelatedCollection = createAsyncThunk<ICollection[], string>(
  "collections/getRelatedCollection",
  async (id) => {
    const response: AxiosResponse =
      await CollectionsService.getRelatedCollection(id);
    return response.data;
  }
);
