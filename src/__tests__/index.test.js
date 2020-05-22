import { Daemon } from '../index'

const vasya = new Daemon('Bazelius');
vasya.levelUp();
vasya.levelUp();
vasya.levelUp();
test('Посмотрим, насколько ты крепок!', () => {
expect(vasya.defence).toBe(70)
})