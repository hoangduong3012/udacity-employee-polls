/* eslint-disable no-unused-expressions */
const { _saveQuestionAnswer } = require("../utils/_DATA");
describe("_saveQuestionAnswer", () => {
    it("should resolve the promise if correctdata has been passed in", async () => {
      const authUser = "hoangbui";
      const qid = "8xf0y6ziyjabvozdd253nd";
      const answer = "optionOne";
      const results = await _saveQuestionAnswer({ authUser, qid, answer });
      // eslint-disable-next-line jest/valid-expect
      expect(results).resolves;
    });
  
    it("should return an error since icorrect data has been passed in", async () => {
      const qid = "dgvvg6667788";
      const authUser = "intruder";
      const answer = null;
  
      await expect(() =>
        _saveQuestionAnswer({ authUser, qid, answer })
      ).rejects.toEqual("Please provide authUser, qid, and answer");
    });
  });