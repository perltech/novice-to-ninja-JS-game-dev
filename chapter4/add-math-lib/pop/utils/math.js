function rand(min, max) {
    // return random integer
    Math.floor(randf(min, max));
}

function randf(min, max) {
    // return random float
    if (max == null) {
        max = min || 1;
        min = 0;
    }
    return Math.random() * (max - min) + min;
}
export default {
    rand,
    randf
};