import initialState from "../helpers/initialState";
import MatchState from "../types/MatchState";

const endMatch = () => (): MatchState => initialState;

export default endMatch;
