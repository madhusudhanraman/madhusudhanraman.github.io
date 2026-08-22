---
title: "Partitions, Young Diagrams, and Tableaux"
date: 2026-08-19 18:00:00 +0530
last_modified_at: 2026-08-22 18:00:00 +0530
categories: 
  - Physics
excerpt: >
  Keeping track of partitions and permutations.
---

Consider a natural number $ n \in \mathbb{N} $. The $ r $-tuple
$ \lambda = \left( \lambda _ {1} , \cdots , \lambda _ {r} \right) $
such that
\begin{equation}
\lambda _ {1} \geq \lambda _ {2} \geq \cdots \geq \lambda _ {r} \ ,
\end{equation}
is said to be a partition of $ n $ if
\begin{equation}
\sum _ {k=1} ^ {r} \lambda _ {k} = n \ .
\end{equation}
This is sometimes denoted $ \lambda \vdash n $ (sometimes one says the
size of the partition is $ \left\vert \lambda \right\vert = n $) and
the length of the partition is denoted $ \ell (\lambda ) = r $. Of
course, a number may admit multiple partitions. For example, the
number $ 3 $ can be partitioned as $ (3) $, $ (2,1) $, and
$ (1,1,1) $, each of which can be represented diagrammatically:
\begin{equation}
(3) \equiv \yng(3) \quad \text{and} \quad  (2,1) \equiv \yng(2,1) \quad \text{and} \quad (1,1,1) \equiv \yng(1,1,1) \ ,
\end{equation}
where the right hand sides above are examples of Young diagrams. As
another example, here are two distinct partitions of $ 7 $:
\begin{equation}
\lambda _ {1} = \yng(3,2,1,1) \quad \text{and} \quad \yng(4,2,1) = \lambda _ {2}  \ .
\end{equation}
From these and similar pictures, it is easy to see that the number of
boxes of the Young diagram is the same as the number being
partitioned: $ \left\vert \lambda \right\vert = n $. Further, the
length of the partition $ \ell (\lambda ) $ is simply the number of
rows in the Young diagram.

The previous example affords us an interesting opportunity: notice
that the two partitions of $ 7 $ depicted above, when written out as
tuples, look like:
\begin{equation}
\lambda _ {1} = (3,2,1,1) \quad \text{and} \quad \lambda _ {2} = (4,2,1) \ .
\end{equation}
In this representation, they don't seem to have much to do with each
other. Notice, however, that the corresponding Young diagrams are
related by reflection across the diagonal. The two partitions are then
said to be related by transposition:
$ \lambda _ {1} = \lambda _ {2} ^ {\text{T}} $. Of course, it may be
that some partitions are their own transposes:
$ \lambda = \lambda ^ {\text{T}} $. We have already seen an example of
this, in $ (2,1) \vdash 3 $.

It can be useful to assign coordinates to the boxes in Young diagrams:
we endow the box in the $ i $-th row and $ j $-th column with the
coordinates $ (i,j) $ where
\begin{equation}
1 \leq i \leq \ell (\lambda ) \quad \text{and} \quad 1 \leq j \leq \lambda _ {i} \ .
\end{equation}
The limits on the coordinates above use the fact that the length of
the $ i $-th row is $ \lambda _ {i} $. The length of the $ j $-th
column, on the other hand, is easily specified with reference to the
transposed diagram. Consider the example $ \lambda = (3,2,1,1) $ we
saw earlier. The lengths of the columns in $ \lambda $ are easily seen
to be $ (4,2,1) $, which is precisely $ \lambda ^ {\text{T}} $. More
generally, we can conclude that the length of the $ j $-th column is
$ \lambda ^ {\text{T}} _ {j} $.

The symmetric group $ S _ {n} $ is the set of all permutations of
$ n $ elements. It has order $ n! $ and is an important example of a
finite group. An element $ s \in S _ {n}  $ may be represented as

$$
s = 
\begin{pmatrix}
  1 & 2 & \cdots & n \\
  s(1) & s(2) & \cdots & s(n)
\end{pmatrix} \ ,
$$

and it sends $ k \rightarrow s(k) $ for all $ 1 \leq k \leq n $. For
example, below is an element of $ S _ {6} $:

$$
\sigma = 
\begin{pmatrix}
  1 & 2 & 3 & 4 & 5 & 6 \\
  4 & 5 & 1 & 3 & 2 & 6
\end{pmatrix} \ .
$$

It is easily seen that every permutation can be decomposed into
disjoint cycles. For example, $ \sigma \in S _ {6}  $ can be
equivalently written as
\begin{equation}
\sigma = (143)(25)(6) \ ,
\end{equation}
where each number in each parenthesis should be read as being mapped
into the next one, with periodic boundary conditions, i.e. the last
number maps to the first. Each of these parentheses is a cycle, and
each cycle may have different lengths. To be sure, these are just
different notations for the same element of the permutation group; we
have, it would seem, gained little by introducing the cycle notation.

Not so! Consider the element $ s = (132)(45) \in S _ {5} $ and let
$ t $ be any other element of $ S _ {5} $. It is easily observed that
the conjugated element $ t s t ^ {-1} $ is such that:
\begin{equation}
t s t ^ {-1} (t(k)) = t (s(k)) \ ,
\end{equation}
so, for example:
\begin{equation}
tst ^ {-1} (t(1)) = t(3) \quad \text{and} \quad tst ^ {-1} (t(3)) = t(2) \quad \text{and} \quad tst ^ {-1} (t(2)) = t(1) \ ,
\end{equation}
and, more generally:
\begin{equation}
tst ^ {-1} = (t(1)t(3)t(2))(t(4)t(5)) \ .
\end{equation}
Thus, the conjugation of $ s $ by any other element $ t \in S _ {5} $
preserves the cycle structure. Said differently, two elements of the
permutation group are conjugate if and only if they have the same
cycle structure.

We can therefore break up all elements of the permutation group
$ S _ {n} $ into conjugacy classes, with all elements possessing the
same cycle structure grouped together. These conjugacy classes, it is
easy to see, can be labelled by partitions of $ n $. So for example,
$ \sigma \in S _ {6} $ above belongs to the conjugacy class
$ (3,2,1) \vdash 6 $ and $ s \in S _ {5} $ above belongs to the
conjugacy class $ (3,2) \vdash 5 $. The number of conjugacy classes of
$ S _ {n} $ is therefore the same as the number of partitions of
$ n $, denoted $ p(n) $. Each partition specifies the cycle structure
of elements of that conjugacy class. Since in this description we are
only keeping track of the cycle structure, the following notation is
recommended to us:
\begin{equation}
\yng(2,2,1) \equiv (1 , 2 ^ {2}) \ ,
\end{equation}
which tells us that there is one $ 1 $-cycle (or fixed point) and two
$ 2 $-cycles. More generally, a diagram
$ (1 ^ {m _ {1} }, 2 ^ {m _ {2} }, \cdots , n ^ {m _ {n} } ) $ is a
conjugacy class with $ m _ {k} $ $ k $-cycles for $ 1 \leq k \leq n
$. The multiplicies $ m _ {k} $ must here satisfy
\begin{equation}
\sum _ {k=1} ^ {n} k m _ {k} = n \ .
\end{equation}
We may further abbreviate this notation, and just
consider the $ n $-tuple $ [m _ {1} , \cdots , m _ {n} ] $ to label a
conjugacy class.

So far, we have just discussed the correspondence between partitions,
Young diagrams, and conjugacy classes of the symmetric group. In order
to discuss representations of the symmetric group, we will have to
introduce Young tableaux, which we now turn to.

## Young Tableaux 

Consider a Young diagram corresponding to a partition
$ \lambda \vdash n $. A Young tableau is obtained when one fills the
boxes of $ \lambda  $ with some labels. For example, to $ (3,2) \vdash
5 $ we can associate the tableau
\begin{equation}
T = \quad \young(152,43) \ .
\end{equation}
For our discussion of the representation theory of $ S _ {n} $, will
consider tableaux like this, except that we will place some further
restrictions on the manner in which the labels appear.

- Labels feature each of the integers
  $ \left\lbrace 1, \cdots , n \right\rbrace $ exactly once.
- Labels increase as one moves left-to-right as well as from
  top-to-bottom. That is, $ T(i,j) < T(i+1,j) $ and $ T(i,j) <
  T(i,j+1) $. 

Such tableaux are called standard Young tableaux. For example, the
tableau $ T $ above is not a standard Young tableau, but the following
is:
\begin{equation}
T' =\quad \young(134,25) \ ,
\end{equation}
since the labels increase as we have stipulated.

It is clear that with these restrictions, the number of standard
tableaux is limited, i.e. there are only a fixed number of ways in
which labels can be assigned to boxes. Let us work out an
example. Consider the group $ S _ {3}  $, which has three conjugacy
classes
\begin{equation}
\yng(3) \quad , \quad  \yng(2,1) \quad , \quad  \yng(1,1,1) \ .
\end{equation}
Notice that the first and last of these can only be filled in exactly
one way:
\begin{equation}
\young(123) \quad \text{and} \quad \young(1,2,3) \ .
\end{equation}
However, the second of these has two possible standard Young tableaux:
\begin{equation}
\young(12,3) \quad \text{and} \quad \young(13,2) \ .
\end{equation}
In general, the number of standard Young tableaux associated to a
Young diagram $ \lambda  $ is denoted $ f ^ {\lambda }  $. It will
turn out that $ f ^ {\lambda }  $ is related to the dimensions of
irreducible representations of $ S _ {n}  $. It is given by the hook
length formula:
\begin{equation}
f ^ {\lambda } = \frac{n!}{\prod _{b \in \lambda } ^{} h(b)} \ ,
\end{equation}
where $ h(b) $ is the hook length of a box $ b $ in the Young diagram
$ \lambda  $. We will explain this rather miraculous fact shortly.
