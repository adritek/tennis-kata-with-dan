import { GameTennis } from '../GameTennis';
import { describe, expect, it } from '@jest/globals';

describe('foo', () => {
  it('game start', () => {
    expect(new GameTennis().getScore()).toBe('love-love');
  });
});

describe('Player one scores', () => {
  it('Returns player one score', () => {
    expect(new GameTennis().playerOneScore().getScore()).toBe('15-love');
  });
});

describe('Player two scores', () => {
  it('Returns player two score', () => {
    expect(new GameTennis().playerTwoScore().getScore()).toBe('love-15');
  });
});
