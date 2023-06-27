import Daemon from "../js/Daemon";
import Magician from "../js/Magician";

test('Атака мага без дурмана', () => {
  const magician = new Magician();
  magician.attack = 100;
  const result = magician.attack;
  expect(result(2)).toEqual(90);
});

test("Атака демона под дурманом", () => {
  const daemon = new Daemon();
  daemon.attack = 100;
  daemon.stoned = true;
  const result = daemon.attack;
  expect(result(2)).toEqual(85);
});