---
title: "Representations of the Permutation Group"
date: 2026-08-19 18:00:00 +0530
last_modified_at: 2026-08-22 18:00:00 +0530
categories: 
  - Physics
excerpt: >
  Constructing irreducible representations of the permutation group.
---

## Group Algebra and Young Symmetrisers

Consider the group algebra $ \mathbb{C}[S _ {n}] $: a complex vector
space whose basis vectors are the elements of $ S _ {n} $. It is an
algebra because group multiplication tells us how to take products of
elements of this vector space. A typical element of
$ \mathbb{C}[S _ {n}] $ looks like
\begin{equation}
\sum _ {\sigma \in S _ {n}} c _ {\sigma} \sigma \ ,
\end{equation}
where $ c _ {\sigma} \in \mathbb{C} $.

Given a standard Young tableau $ T $ associated to a diagram
$ \lambda \vdash n $, we can define two important subgroups of
$ S _ {n} $. The row group, denoted $ R _ {T} $, is the subgroup of
permutations that only permute entries within the same row of $ T
$. Similarly, the column stabiliser, denoted $ C _ {T} $, is the
subgroup of permutations that only permute entries within the same
column of $ T $.

Using these subgroups, we construct two special elements in the group
algebra $ \mathbb{C}[S _ {n}] $. The first of these is the row symmetriser:
\begin{equation}
a _ {T} = \sum _ {p \in R _ {T}} p \ .
\end{equation}
The second of these is the column anti-symmetriser:
\begin{equation}
b _ {T} = \sum _ {q \in C _ {T}} \text{sgn}(q) q \ ,
\end{equation}
where $ \text{sgn}(q) $ is the signature (or parity) of the
permutation $ q \in S _ {n} $. This is defined in the usual way: a
permutation that effects an even number of pairwise swaps has
signature $ +1 $ and one that effects an odd number of swaps has
signature $ -1 $.

The Young symmetriser associated to the tableau $ T $ is defined as
their product:
\begin{equation}
c _ {T} = a _ {T} b _ {T} \ .
\end{equation}
It is an element of the group algebra.

## Tensor Symmetries

Given a vector space $ V $, the symmetric group $ S _ {n} $ naturally
acts on the $ n $-fold tensor product $ V^{\otimes n} $ by permuting
the indices. Thus, an element of $ V ^ {\otimes n} $ is acted upon by
an element of the symmetric group $ \sigma \in S _ {n} $ as
\begin{equation}
\sigma [V _ {a _ {1} \cdots a _ {n} }] = V _ {a _ {\sigma (1)} \cdots a _ {\sigma (n)} } \ .
\end{equation}
We will use this to reveal what the Young symmetriser does.

Let us start with the simplest non-trivial group, $ S _ {2} $, acting
on a rank-2 tensor $ M _ {ij} \in V \otimes V $. There are two
relevant partitions: $ \smol{\yng(2) } $ and $ \smol{\yng(1,1) } $,
each of which have unique tableaux corresponding to them. Let us take
these both in turn.

The first of these partitions corresponds to the tableau
$ \tiny{\young(12) } $ which has a trivial column group and a row
group with two elements: the identity $ e $ and the element $ (12)
$. The Young symmetriser is therefore
\begin{equation}
c _ {\smol{\yng(2) } } = e + (12) \ .
\end{equation}
Acting with this element on $ M _ {ij}  $ yields
\begin{equation}
c _ {\smol{\yng(2) } } [M _ {ij}] = M _ {ij} + M _ {ji} \ ,
\end{equation}
which is the symmetric part of the tensor.

Alternatively, we can consider the second of these partitions
corresponding to the tableau $ \tiny{\young(1,2) } $ which has a
trivial row group and a column group with two elements: the identity
element $ e $ and the element $ (12) $, which has negative
parity. Thus, the Young symmetriser is
\begin{equation}
c _ {\smol{\yng(1,1)} } = e - (12) \ .
\end{equation}
Applying this to $ M _ {ij}  $ yields
\begin{equation}
c _ {\smol{\yng(1,1)} } [M _ {ij}] = M _ {ij} - M _ {ji} \ ,
\end{equation}
or the antisymmetric part of the tensor. 

We can apply this to more complex cases rather
straightforwardly. Consider the group $ S _ {3} $ and one of the two
standard tableau corresponding to the diagram
$ \smol{\yng(2,1) } $:
\begin{equation}
T = \quad \young(12,3) \ .
\end{equation}
The row group is $ R _ {T} = \lbrace e, (12) \rbrace $, and the
column group is $ C _ {T} = \lbrace e, (13) \rbrace $. The
corresponding symmetrisers are
\begin{equation}
a _ {T} = e + (12) \quad \text{and} \quad b _ {T} = e - (13) \ .
\end{equation}
Taking their product, the Young symmetriser is:
\begin{equation}
c _ {T} = (e + (12))(e - (13)) = e + (12) - (13) - (132) \ .
\end{equation}
If we apply this to a rank-3 tensor $ M _ {ijk} $, we obtain:
\begin{equation}
c _ {T}[M _ {ijk}] = M _ {ijk} + M _ {jik} - M _ {kji} - M _ {kij} \ .
\end{equation}
In this case too, the Young symmetriser has projected a generic tensor
onto a subspace whose symmetry is dictated by the diagram $
\smol{\yng(2,1) }  $: symmetric under the exchange of first and second
indices, but antisymmetric under the exchange of first and third
indices. 

## Regular and Irreducible Representations

We started out this section with the goal of constructing irreducible
representations for the permutation group. To do this, we introduce
the regular representation.

In the regular representation, the representation vector space is the
group algebra $ \mathbb{C}[S _ {n}] $ itself, and the group
$ S _ {n} $ acts on it by left multiplication. That is, given a vector
$ v \in \mathbb{C}[S _ {n}] $, the group element $ g \in S _ {n} $
acts on it to produce a new vector $ gv $. This is, of course, a large
space, and since we are interested in irreducible representations, we
will want to carve out a subspace within this larger group algebra
that is closed under this left multiplication. In other words, we are
looking for a left ideal. 

Consider, therefore, the left ideal generated by $ c _ {T} $:
\begin{equation}
V _ {\lambda} = \mathbb{C}[S _ {n}] c _ {T} \ ,
\end{equation}
where $ \lambda $ is the diagram corresponding to the tableau $ T $.
This space consists of all elements of the form $ v c _ {T} $ for any
$ v \in \mathbb{C}[S _ {n}] $. By definition, if we take any element
$ w \in V _ {\lambda} $ and multiply it on the left by any permutation
$ \sigma \in S _ {n} $, the result
$ \sigma w = \sigma (v c _ {T}) = (\sigma v) c _ {T} = $ is still in
$ V _ {\lambda} $.

Consider the group $ S _ {3}  $, whose representations we now
construct.

### Trivial Representation
Consider the partition $ \smol{\yng(3) } $ and the corresponding tableau
$ T = \tiny{\young(123) } $. The Young symmetriser is just the sum of
all elements:
\begin{equation}
c _ {\smol{\yng(3) } } = \sum _ {\sigma \in S _ {3}} \sigma \ .
\end{equation}
If we act on $ c _ {\smol{\yng(3) } } $ with a group element $ g $, we get
\begin{equation}
  g \cdot c _ {\smol{\yng(3) } } = \sum _ {\sigma \in S _ {3} } ^ {} g \cdot \sigma
  = \sum _ {\sigma ' \in S _ {3} } ^ {} \sigma ' = c _ {\smol{\yng(3) } }
  \ .
\end{equation}
The left ideal $ V _ {\smol{\yng(3) } } $ is therefore a
$ 1 $-dimensional space where every group element acts as the
identity. This, in other words, is the trivial representation.

### The Sign Representation
Consider the partition $ \smol{\yng(1,1,1) } $ representing a single
column, whose corresponding tableau is $ T = \tiny{\young(1,2,3)}
$. Here, the symmetriser is:
\begin{equation}
c _ {\smol{\yng(1,1,1) } } = \sum _ {\sigma \in S _ {3}} \text{sgn}(\sigma)\sigma \ .
\end{equation}
If we act on this with a group element $ g $, we pull out a sign
factor:
\begin{equation}
g \cdot c _ {\smol{\yng(1,1,1) } } = \text{sgn}(g) c _
{\smol{\yng(1,1,1) } }
\end{equation}
The left ideal $ V _ {\smol{\yng(1,1,1) } } $ is therefore a
$ 1 $-dimensional space corresponding to the sign representation.

### The Mixed Representation
Let's return to the mixed symmetry tableau $ T = \tiny{\young(12,3)} $
where $ c _ {T} = e + (12) - (13) - (132) $. What left ideal does this
generate?  Let our first basis vector be $ v _ {1} = c _ {T} $. Notice
that applying the row group element $ (12) $ leaves it invariant:
\begin{equation}
(12)v _ {1} = (12)a _ {T} b _ {T} = a _ {T} b _ {T} = v _ {1} \ .
\end{equation}
Now, let us generate a second vector by acting on it with a
permutation outside the row group, say $ (23) $. Let
$ v _ {2} = (23)c _ {T} $.  It is easy to check that if we act on this
$ 2 $-dimensional basis $ \lbrace v _ {1}, v _ {2} \rbrace $ with any
element of $ S _ {3} $, the result can always be written as a linear
combination of $ v _ {1} $ and $ v _ {2} $. The left ideal $ V _
{T }  $ is therefore a two-dimensional irreducible
representation. 

Suppose instead that we had chosen the other standard tableau for the
partition $ \smol{\yng(2,1) } $, namely
\begin{equation}
T' = \quad \young(13,2) \ .
\end{equation}
The row group for this tableau is
$ R _ {T'} = \lbrace e, (13) \rbrace $ and the column group is
$ C _ {T'} = \lbrace e, (12) \rbrace $. Constructing the row
symmetriser $ a _ {T'} = e + (13) $ and the column antisymmetriser
$ b _ {T'} = e - (12) $ yields a new, different Young symmetriser:
\begin{equation}
c _ {T'} = (e + (13))(e - (12)) = e - (12) + (13) - (132) \ .
\end{equation}
From here, we can consider the left ideal constructed from this
element, $ V _ {T'} = \mathbb{C}[S _ {3}] c _ {T'} $, which is a
different subspace within the group algebra compared to the subspace $
V _ {T}  $ we constructed earlier. The two spaces are, however,
isomorphic, in that right multiplication by $ (23) $ maps $ T $ to $
T' $ and commutes with the left action of $ S _ {3}  $. We do not,
therefore, regard this as a distinct representation; indeed, this is
why the representations are labelled not by the tableau but the
diagram!


More generally, for any standard Young tableau $ T $ associated to a
diagram (or, equivalently, a partition) $ \lambda \vdash n$, the left
ideal $ V _ {\lambda} = \mathbb{C}[S _ {n}] c _ {T} $ is an
irreducible representation of $ S _ {n} $.
