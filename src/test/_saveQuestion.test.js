const { _saveQuestion } = require("../utils/_DATA");

  it("should return a promise since correct data has been passed in", async () => {
    const question = {
      optionOneText: "Work at home",
      optionTwoText: "Work at office",
      author: "sarahedo",
    };

    await expect(() => _saveQuestion(question)).resolves;
  });

  it("will return an error sice incorrect data has been passed in", async () => {
    var question = {
    author: null,
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
    "Please provide optionOneText, optionTwoText, and author"
    );
});
