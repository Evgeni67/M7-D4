export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_JOB_TO_FAVOURITES":
      console.log(state);
      return {
        ...state,
        favouriteJobs: state.favouriteJobs.concat(action.payload),
      };
    //pass an id not the whole object
    case "REMOVE_JOB_FROM_FAVOURITES":
      return {
        ...state,
        favouriteJobs: state.favouriteJobs.filter(
          (x) => x.id !== action.payload
        ),
      };
    case "ADD_FETCHED_JOBS":
      console.log("adding data to global state");
      return {
        ...state,
        fetchedJobs: action.payload,
      };
      case "CHANGE_CURRENT_JOB":
        console.log("changing current job");
        return {
          ...state,
          currentJob: action.payload,
        };
      default:
      return state
  }
}
