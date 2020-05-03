export function votesAverage(item) {
    const commentsCount = item.comments.length
    const votesSum = item.comments
        .map(comment => comment.stars)
        .reduce((previous, currentValue) => previous + currentValue);
    const votesAvg = votesSum / commentsCount;
    return Math.round((votesAvg + Number.EPSILON) * 10) / 10;
}