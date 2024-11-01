/**
 * This is a certain movement strategy of an enemy.
 */
class EnemyStrategy {
    constructor(player) {
        this.player = player;
    }
    update(dt, enemy) {
        var direction = this.player.getCenter().copy().sub(enemy.getCenter()).normalize();
        var acc = direction.mult(dt * 5);
        enemy.accelerate(acc.x, acc.y);
    }
}