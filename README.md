# polygon
## JS polygon helpers

### Point:
    point = { x: number, y: number };

### Polygon:
    polygon = [point];


### Polygon area:
    polygonArea(polygon)
  
    Input parameter:
      polygon: Array of points
    Returns:
      Number (polygon area)
  


### Polygon perimeter:
    polygonPerimeter(polygon)

    Input parameter:
      polygon: Array of points
    Returns:
      Number (polygon perimeter)



### Determine if point inside polygon:
    pointInPolygon(vertex, point)

    Input parameter:
      vertex: Array of points
      point: Object { x: number, y: number }
    Returns:
      Boolean (true if point inside polygon)

