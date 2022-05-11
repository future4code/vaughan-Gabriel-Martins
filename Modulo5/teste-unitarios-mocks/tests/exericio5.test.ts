import { porformAttackInverted } from "../src/exercicios3";
import { Personagem } from "../src/types";




test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Personagem = {
      nome: "Scorpion",
      vida: 1500,
      defesa: 200,
      forca: 600,
    };

    const defender: Personagem = {
      nome: "Kitana",
      vida: 1500,
      defesa: 400,
      forca: 800,
    };

    porformAttackInverted(attacker, defender, validatorMock as any);

    console.log("defender teste", defender)
    console.log("attacker teste", attacker)

    expect(defender.vida).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Personagem = {
        nome: "",
        vida: 1500,
        defesa: 200,
        forca: 600,
    };

    const defender: Personagem = {
        nome: "",
        vida: 100,
        defesa: 100,
        forca: 800,
    };

    try {
        porformAttackInverted(attacker, defender, validatorMock as any);
    } catch (err : any) {
      expect(err.message).toBe("Invalid Character!");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(2);
      expect(validatorMock).toHaveReturnedTimes(2);
    }
  });