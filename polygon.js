const polygonArea = (polygon: any) => {
  let total = 0;

  for (let i = 0; i < polygon.length; i++) {
    let addX = polygon[i].x;
    let addY = polygon[i === polygon.length - 1 ? 0 : i + 1].y;
    let subX = polygon[i === polygon.length - 1 ? 0 : i + 1].x;
    let subY = polygon[i].y;

    total += (addX * addY * 0.5);
    total -= (subX * subY * 0.5);
  }

  return parseFloat(Math.abs(total * 1e6).toFixed(2));
}

const polygonPerimeter = (polygon: any) => {
  let perimeter = 0;
  for (let i = 0; i < polygon.length; i++) {
    const dx = polygon[i === polygon.length - 1 ? 0 : i + 1].x - polygon[i].x;
    const dy = polygon[i === polygon.length - 1 ? 0 : i + 1].y - polygon[i].y;
    perimeter = perimeter + Math.pow(dx * dx + dy * dy, 0.5);
  }

  return perimeter;
}

const pointInPolygon = (vertex: any, point: any) => {
  let c = false;
  for (let i = 0, j = vertex.length - 1; i < vertex.length; j = i++) {
    if ( ((vertex[i].y > point.y) != (vertex[j].y > point.y)) &&
      (point.x < (vertex[j].x - vertex[i].x) * (point.y - vertex[i].y) / (vertex[j].y - vertex[i].y) + vertex[i].x) )
      c = !c;
  }
  return c;
}
