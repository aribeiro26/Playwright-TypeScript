import TestFunctions from "../basepage/TestFunctions";
export default class SearchPage extends TestFunctions {
    Find(text: string): Promise<void>;
    FindValidate(text: string): Promise<void>;
}
