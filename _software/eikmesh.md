---
layout: project
description: During my Ph.D. I created EikMesh, a Java library for high quality meshes.
image: software/eikmesh.jpg
permalink: /works/eikmesh/
title: "EikMesh"
---

# {{ page.title }}

During my Ph.D. I created [EikMesh]() {% cite zoennchen:2019 %}, a Java library for generating 2D meshes.
It is part of Vadere and was developed to generate high-quality meshes for spatial discretization in the domain of pedestrian dynamics.

The execution of the following code example generates a mesh for a ring.

```java
VRectangle bound = new VRectangle(-0.1, -0.1, 2.2, 2.2);
IDistanceFunction d_r = IDistanceFunction.createRing(1, 1, 0.2, 1.0);
double h_min = 0.1;
PEikMesh meshImprover = new PEikMesh(d_r,h_min,bound);
meshImprover.generate();
```

You can build complex geometries by combining multiple distance functions.

```java
VRectangle bound = ...
VRectangle rect = new VRectangle(0.5, 0.5, 1, 1);
IDistanceFunction d_c = IDistanceFunction.createDisc(0.5, 0.5, 0.5);
IDistanceFunction d_r = IDistanceFunction.create(rect);
IDistanceFunction d = IDistanceFunction.substract(d_c, d_r);
double h_min = 0.03;
var meshImprover = new PEikMesh(
				d,
				p -> h_min + 0.5 * Math.abs(d.apply(p)),
				h_min,
				bound,
				Arrays.asList(rect));

VRectangle rect = new VRectangle(-0.5, -0.5, 1, 1);
VRectangle boundary = new VRectangle(-2,-0.7,4,1.4);

IDistanceFunction d1_c = IDistanceFunction.createDisc(-0.5, 0, 0.5);
IDistanceFunction d2_c = IDistanceFunction.createDisc(0.5, 0, 0.5);
IDistanceFunction d_r = IDistanceFunction.create(rect);
IDistanceFunction d_b = IDistanceFunction.create(boundary);
IDistanceFunction d_unionTmp = IDistanceFunction.union(d1_c, d_r)
IDistanceFunction d_union = IDistanceFunction.union(d_unionTmp, d2_c);
IDistanceFunction d = IDistanceFunction.substract(d_b,d_union);

double h_min = 0.03;
var meshImprover = new PEikMesh(
				d,
				p -> h_min + 0.5 * Math.abs(d.apply(p)),
				edgeLength,
GeometryUtils.boundRelative(boundary.getPath()),
				Arrays.asList(rect));

var triangulation = meshImprover.generate();
```

## References

{% bibliography --cited_in_order %}