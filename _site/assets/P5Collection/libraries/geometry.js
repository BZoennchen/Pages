class GeometryUtils {

    /**
     * Tests if the line-segment (p1, p2) intersects the line (p, q).
     */
    static intersectLine(pX, pY, qX, qY, p1X, p1Y, p2X, p2Y) {
        let ccw1 = GeometryUtils.ccw(pX, pY, qX, qY, p1X, p1Y);
        let ccw2 = GeometryUtils.ccw(pX, pY, qX, qY, p2X, p2Y);
        return (ccw1 < 0 && ccw2 > 0) || (ccw1 > 0 && ccw2 < 0);
    }

    static ccw(qX, qY, pX, pY, rX, rY) {
        return -((qX - pX) * (rY - pY) - (rX - pX) * (qY - pY));
    }

    /**
     * Tests if the first line-segment (p,q) intersects the second line-segment (p1,p2).
     */
    static intersectLineSegments(pX, pY, qX, qY, p1X, p1Y, p2X, p2Y) {
        return GeometryUtils.intersectLine(pX, pY, qX, qY, p1X, p1Y, p2X, p2Y) &&
            GeometryUtils.intersectLine(p1X, p1Y, p2X, p2Y, pX, pY, qX, qY);
    }

    /**
     * Tests if the half-line-segment starting at p in the direction (q-p) intersects the line-segment (p1,p2).
     */
    static intersectHalfLineWithLine(pX, pY, qX, qY, p1X, p1Y, p2X, p2Y) {
        let ccw1 = GeometryUtils.ccw(pX, pY, qX, qY, p1X, p1Y);
        let ccw2 = GeometryUtils.ccw(pX, pY, qX, qY, p2X, p2Y);

        // p1 and p2 are on different sides of directed line (q,p) if this is not the case there is no intersection
        if ((ccw1 < 0 && ccw2 > 0) || (ccw1 > 0 && ccw2 < 0)) {

            let ccwq = GeometryUtils.ccw(p1X, p1Y, p2X, p2Y, qX, qY);
            let ccwp = GeometryUtils.ccw(p1X, p1Y, p2X, p2Y, pX, pY);

            // p and q on different sides, therefore the half-segment (q,p) intersects with the line (p1,p2)
            if ((ccwq < 0 && ccwp > 0) || (ccwq > 0 && ccwp < 0)) {
                return true;
            } // otherwise p has to be closer to the line-segment p1, p2 than q
            else {
                return GeometryUtils.distanceToLineSegment(p1X, p1Y, p2X, p2Y, qX, qY) < GeometryUtils.distanceToLineSegment(p1X, p1Y, p2X, p2Y, pX, pY);
            }
        } else {
            return false;
        }
    }

    /**
     * Computes the distance between the line-segment (p1, p2) and the point (x, y).
     */
    static distanceToLineSegment(p1X, p1Y, p2X, p2Y, x, y) {
        let len2 = (p2X - p1X) * (p2X - p1X) + (p2Y - p1Y) * (p2Y - p1Y);
        let r = ((x - p1X) * (p2X - p1X) + (y - p1Y) * (p2Y - p1Y)) / len2;

        if (r <= 0.0)
            return GeometryUtils.distance(p1X, p1Y, x, y);
        if (r >= 1.0)
            return GeometryUtils.distance(p2X, p2Y, x, y);

        let s = ((p1Y - y) * (p2X - p1X) - (p1X - x) * (p2Y - p1Y)) / len2;
        return Math.abs(s) * Math.sqrt(len2);
    }

    static distance(px, py, qx, qy) {
        return Math.sqrt((px - qx) * (px - qx) + (py - qy) * (py - qy));
    }
}