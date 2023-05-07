import { all, call, put, takeLatest } from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./categories.action";

export function* fetchCategoriesAsync() {
  try {
    const category = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(category));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
