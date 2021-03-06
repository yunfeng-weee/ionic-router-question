import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {
  ISearchCollections,
  ISearchPhotos,
  ISearchUsers,
} from "../../models/generic";
import SearchService, { BasicSearchParams } from "../../api/search";

export const searchUsersQry = createAsyncThunk<ISearchUsers, BasicSearchParams>(
  "search/searchUsers",
  async ({ query, page, per_page }) => {
    const response: AxiosResponse = await SearchService.searchUsers({
      query,
      page,
      per_page,
    });
    return response.data;
  }
);

export const searchCollectionsQry = createAsyncThunk<
  ISearchCollections,
  BasicSearchParams
>("search/searchCollections", async ({ query, page, per_page }) => {
  const response: AxiosResponse = await SearchService.searchCollections({
    query,
    page,
    per_page,
  });
  return response.data;
});

export const searchPhotosQry = createAsyncThunk<
  ISearchPhotos,
  BasicSearchParams
>("search/searchPhotos", async ({ query, page, per_page }) => {
  const response: AxiosResponse = await SearchService.searchPhotos({
    query,
    page,
    per_page,
  });
  return response.data;
});
