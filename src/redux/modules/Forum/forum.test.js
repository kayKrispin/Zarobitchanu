import forumReducer from "../Forum/store";
import { initialState } from "./store";
import * as types from "../Forum/types";
import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import {
  createForum,
  getForums,
  getTopics,
} from "./services";
import {
  createForumRequest,
  getForumsRequest,
  getTopicsRequest,
  setActiveForumidRequest,
} from "./actions";
import { throwError } from "redux-saga-test-plan/providers";
import forumSagas from "../Forum/sagas";

describe("Redux: Forum. Sagas", () => {

  it("should throw error during forum creation", () => {
    const error = "Something goes wrong";
    const forum = { title: "cmon", loading: false };

    return expectSaga(forumSagas)
      .withReducer(forumReducer)

      // Test Saga
      .put({ type: types.SHOW_LOADING })
      .provide([
        [call(createForum, forum), throwError(error)],
      ])
      .put({ type: types.CREATE_FORUM_REQUEST_ERROR, error })
      .put({ type: types.HIDE_LOADING })

      // Test reducer
      .hasFinalState({
        ...initialState,
        error,
        loading: false
      })
      .dispatch(createForumRequest(forum))
      .silentRun();
  });

  it("should throw error during fetching forums", () => {
    const error = "Something goes wrong";

    return expectSaga(forumSagas)
      .withReducer(forumReducer)

      // Test Saga
      .put({ type: types.SHOW_LOADING })
      .provide([
        [call(getForums), throwError(error)],
      ])
      .put({ type: types.GET_FORUMS_REQUEST_ERROR, error })
      .put({ type: types.HIDE_LOADING })

      // Test reducer
      .hasFinalState({
        ...initialState,
        error,
        loading: false
      })
      .dispatch(getForumsRequest())
      .silentRun();
  });

  it("get forums with success", () => {
    const forums = [
      { title: "cmon", createdAt: new Date() },
      { title: "yep", createdAt: new Date() }
    ];

    return expectSaga(forumSagas)
      .withReducer(forumReducer)

    // Test Saga
      .put({ type: types.SHOW_LOADING })
      .provide([
        [call(getForums), forums],
      ])
      .put({ type: types.GET_FORUMS_REQUEST_SUCCESS, forums })
      .put({ type: types.HIDE_LOADING })

    // Test reducer
      .hasFinalState({
        ...initialState,
        forums: [...forums],
        loading: false
      })
      .dispatch(getForumsRequest())
      .silentRun();
  });


  it("get topics with success", () => {
    const forum = [{
      forumTitle: "CMON",
      topics: [
        { title: "cmon", createdAt: new Date() },
        { title: "yep", createdAt: new Date() }
      ]
    }
    ];

    return expectSaga(forumSagas)
      .withReducer(forumReducer)

      // Test Saga
      .put({ type: types.SHOW_LOADING })
      .provide([
        [call(getTopics, 1), forum],
      ])
      .put({ type: types.GET_TOPICS_REQUEST_SUCCESS, forum })
      .put({ type: types.HIDE_LOADING })

      // Test reducer
      .hasFinalState({
        ...initialState,
        topics: [...forum[0].topics],
        forumTitle: forum[0].title,
        loading: false
      })
      .dispatch(getTopicsRequest(1))
      .silentRun();
  });

  it("should throw error during fetching topics", () => {
    const error = "Something goes wrong";

    return expectSaga(forumSagas)
      .withReducer(forumReducer)

      // Test Saga
      .put({ type: types.SHOW_LOADING })
      .provide([
        [call(getTopics, 1), throwError(error)],
      ])
      .put({ type: types.GET_TOPICS_REQUEST_ERROR, error })
      .put({ type: types.HIDE_LOADING })

      // Test reducer
      .hasFinalState({
        ...initialState,
        error,
        loading: false
      })
      .dispatch(getTopicsRequest(1))
      .silentRun();
  });

  it("set forum id", () => {
    const id = 1;

    return expectSaga(forumSagas)
      .withReducer(forumReducer)

      // Test Saga
      .put({ type: types.SHOW_LOADING })

      .put({ type: types.SET_ACTIVE_FORUM_ID_SUCCESS, id })
      .put({ type: types.HIDE_LOADING })

      // Test reducer
      .hasFinalState({
        ...initialState,
        selectedForumId: id,
        loading: false
      })
      .dispatch(setActiveForumidRequest(1))
      .silentRun();
  });

});


describe("Redux: Forum. Action Creators", () => {

  it("should call create forum success successfully", () => {
    const state = { forum: {} };
    const forum = { id: 1, title: "hello there" };
    const newState = forumReducer(state, {
      type: types.CREATE_FORUM_REQUEST_SUCCESS,
      forum
    });
    expect(newState).toEqual({ ...forum, error: "", forum: {} })
  });

  it("should call create forum error successfully", () => {
    const state = { forum: {} };
    const error = "Something goes wrong";
    const newState = forumReducer(state, {
      type: types.CREATE_FORUM_REQUEST_ERROR,
      error
    });
    expect(newState).toEqual({ error: error, forum: {} })
  });

  it("should call create topic success successfully", () => {
    const state = { topic: {} };
    const topic = { id: 1, title: "hello there" };
    const newState = forumReducer(state, {
      type: types.CREATE_TOPIC_REQUEST_SUCCESS,
      topic
    });
    expect(newState).toEqual({ topic: {} })
  });

  it("should call get topics success successfully", () => {
    const state = { topics: [] };
    const topics = [{ id: 1, title: "hello there" }, { id: 2, title: "nope" }];
    const title = "Nope";
    const newState = forumReducer(state, {
      type: types.GET_TOPICS_REQUEST_SUCCESS,
      forum: [
        {
          title: "Nope",
          topics: [...topics]
        }
      ]
    });
    expect(newState).toEqual({ topics: [...topics], error: "", forumTitle: title })
  });

  it("should call set active forum id success successfully", () => {
    const state = { topics: [] };
    const id = 37;
    const newState = forumReducer(state, {
      type: types.SET_ACTIVE_FORUM_ID_SUCCESS,
      id
    });
    expect(newState).toEqual({ selectedForumId: id, topics: [] })
  });


  it("should call create reply success successfully", () => {
    const state = { topics: [] };
    const replies = { replies: [{ id: "1", text: "np mah" }, { id: "2", text: "wtf" }] };
    const newState = forumReducer(state, {
      type: types.CREATE_REPLY_REQUEST_SUCCESS,
      replies
    });
    expect(newState).toEqual({ replies: replies.replies, topics: [] })
  });

});
