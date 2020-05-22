import { Daemon } from '../daemon';


test('Посмотрим, насколько ты крепок!', () => {
const vasya = new Daemon('Bazelius');
vasya.levelUp();
vasya.levelUp();
vasya.levelUp();

expect(vasya.defence).toBe(70)
})