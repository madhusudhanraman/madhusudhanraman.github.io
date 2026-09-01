---
title: "Manifolds, Vectors, and 1-Forms"
date: 2026-09-01 15:00:00 +0530
categories: 
  - Physics
excerpt: >
  Manifolds, vectors, 1-forms, and pullbacks/pushforwards.
---

In the previous section, we saw that phase space is naturally equipped
with an antisymmetric tensor $\omega _ {\mathsf{ab}}$ that is
everywhere invertible and satisfies a Bianchi identity. We also saw
that under canonical transformations, what we call position and
momentum can get mixed up. For these reasons, it is natural to ask if
classical mechanics can be formulated in a way that makes manifest
this invariance under canonical transformations and a specific choice
of coordinates on phase space. This is the language of symplectic
geometry.

## Manifolds and Coordinates

An $n$-dimensional manifold $M$ is a space such that, informally
speaking, every small patch of it ``looks'' like $\mathbb{R}^{n}$. The
surface of the Earth, for example, is a two-dimensional sphere, but in
a small neighbourhood around you, it looks more or less flat. We
formulate this mathematically as follows: around every point $x \in
M$, mark out an open set $U \subset M$ that contains it, and map this
open set to a subset of $ n $-dimensional flat space:
\begin{equation}
\varphi : U \longrightarrow \varphi(U) \subset \mathbb{R}^{n} \ .
\end{equation}
This map should be a invertible, and ``sufficiently'' differentiable,
although we won't be too careful specifying what that means. The pair
$(U,\varphi)$ is called a coordinate chart, and a little thought
should convince you that this is exactly how one sets up coordinates
in the real world. If the standard coordinates on $\mathbb{R}^{n}$ are
denoted $y^{\mathsf{a}}$, then the functions
$y^{\mathsf{a}} : U \rightarrow \mathbb{R}$ are local coordinates on
$M$.

Our definition of a manifold only required that it resemble flat space
locally, and for this reason, a single coordinate chart will almost
never suffice to cover the entire manifold. As in geography, one then
covers the manifold with multiple (possibly overlapping) charts,
called an atlas. Naturally, whenever two charts overlap, their
coordinates should be related by smooth and invertible transition
functions:
\begin{equation}
y^{\mathsf{a}} \longrightarrow y'^{\mathsf{a}}(y) \ .
\end{equation}
One may therefore approach the subject of manifolds in two
complementary ways. The first is to consider the manifold as a unitary
entity, which is then broken up into overlapping coordinate patches,
sewn together with transition functions. The second is to go the
opposite way, and consistently glue together little patches of flat
space. Either of these descriptions of manifold make one thing
abundantly clear: because of the many equivalent ways in which
manifolds may be conceived, coordinates of points are simple labels
assigned to them, and not intrinsic to the points themselves. This is
our motivation for building up a description independent of these
labels.

We have already seen the example of the two-dimensional sphere
$ \mathbb{S}^ {2} $ as a manifold. In much the same way, the phase
space of a system with $N$ degrees of freedom is a $2N$-dimensional
manifold, whose local coordinates are the positions and momenta
$y ^ {\mathsf{a} } = (q _ {a},p^{a})$.

Of course, a choice of coordinates is not set in stone. We may find,
occasionally, that we have to change coordinate systems. This is
captured mathematically by a smooth map $ \Phi : M \rightarrow M $
that is invertible --- these are called diffeomorphisms. In the study
of classical mechanics, as we have already seen in previous sections,
the class of diffeomorphisms we are interested in typically also
preserve the symplectic structure, or equivalently, the
Poisson brackets don't change. We'll see over the course of this
section that these are precisely the canonical transformations.

## Vectors and 1-Forms

Given a manifold and functions on it, we now proceed to build up some
structure. To every point $x \in M$, we associate an $n$-dimensional
vector space $T _ {x}M$ called the tangent space. Its elements are
called tangent vectors at $x$, and although it might seem odd, an
especially useful definition of a tangent vector is as a derivative
acting on smooth functions. Over the course of this section, we'll see
why this is a good definition. For now, note that derivatives can
(formally) be added and multiplied by scalars, so they make up a
vector space.

A tangent vector $X _ {x} \in T _ {x} M$ assigns to a smooth function
$ f $ a number $X _ {x}[f]$, and obeys the Leibniz rule
\begin{equation}
X _ {x}[fg]=f(x)X _ {x}[g]+X _ {x}[f]g(x) \ .
\end{equation}
In local coordinates $y^{\mathsf{a}}$, a basis for the tangent space
is supplied by the coordinate derivatives $ \partial _ {\mathsf{a} } $
we have encountered before, and a general tangent vector can be
written as
\begin{equation}
X=X^{\mathsf{a}}\partial _ {\mathsf{a}} \ .
\label{eq:coordinate-vector}
\end{equation}

When this vector acts on a function, it returns the function
$X[f]=X^{\mathsf{a}}\partial _ {\mathsf{a}}f$, and so $ X[f] $ can be
thought of as a directional derivative. Under a change of coordinates,
the basis vectors (i.e.~the coordinate derivatives) and the components
transform oppositely:
\begin{equation}
\partial' _ {\mathsf{a}}=\frac{\partial y^{\mathsf{b}}}{\partial y'^{\mathsf{a}}}\partial _ {\mathsf{b}}
\quad \text{and} \quad
X'^{\mathsf{a}}=\frac{\partial y'^{\mathsf{a}}}{\partial y^{\mathsf{b}}}X^{\mathsf{b}} \ ,
\end{equation}
so that the vector $X$ itself remains unchanged.

Given two vector fields $X$ and $Y$, their Lie bracket is the vector
field defined by
\begin{equation}
[X,Y][f]=X[Y[f]]-Y[X[f]] \ .
\end{equation}
In coordinates, its components are
\begin{equation}
[X,Y]^{\mathsf{a}}
=X^{\mathsf{b}}\partial _ {\mathsf{b}}Y^{\mathsf{a}}
-Y^{\mathsf{b}}\partial _ {\mathsf{b}}X^{\mathsf{a}} \ .
\end{equation}
The Lie bracket measures the failure of the flows generated by $X$ and
$Y$ to commute.

The vector space dual to $T _ {x}M$ is denoted $T _ {x}^{\star}M$ and
is called the cotangent space; its elements are called one-forms and
are linear maps from tangent vectors to numbers:
\begin{equation}
\alpha _ {x}:T _ {x}M\longrightarrow\mathbb{R} \ .
\end{equation}
The basis of $T _ {x}^{\star}M$ dual to $\partial _ {\mathsf{a}}$ is
denoted $\mathrm{d}y^{\mathsf{a}}$ and is defined by
\begin{equation}
\mathrm{d}y^{\mathsf{a}}\left(\partial _ {\mathsf{b}}\right)
= \delta  ^ {\mathsf{a}} {} _ {\mathsf{b}} \ .
\end{equation}

More generally, a one-form will be some linear combination of these
basis elements 
\begin{equation}
\alpha=\alpha _ {\mathsf{a}}\,\mathrm{d}y^{\mathsf{a}} \ ,
\label{eq:coordinate-one-form}
\end{equation}
and its pairing with the vector in \eqref{eq:coordinate-vector} is the
coordinate-independent number
\begin{equation}
\alpha(X)=\alpha _ {\mathsf{a}}X^{\mathsf{a}} \ .
\end{equation}
The most immediate example of a one-form is the differential of a
function. Given $f:M\rightarrow\mathbb{R}$, its differential
$\mathrm{d}f$ is defined by
\begin{equation}
\mathrm{d}f(X)=X[f] \ .
\end{equation}
In coordinates, this familiar object is
\begin{equation}
\mathrm{d}f=\partial _ {\mathsf{a}}f\,\mathrm{d}y^{\mathsf{a}} \ .
\end{equation}

At this stage, our manifold doesn't have enough structure for us to
identify a vector with a $ 1 $-form. Depending on the kind of manifold
one is working with, sometimes such an identification is possible. For
example, in Riemannian geometry, we consider manifolds with a metric
tensor, a symmetric $ 2 $-tensor that allows us to identify vectors
and $ 1 $-forms. Practically speaking, this is the business of raising
and lowering indices. On symplectic manifolds, the symplectic form
will provide us with a different way of identifying vectors and $ 1
$-forms.  

Before closing this section, let us briefly discuss mappings between
manifolds. Let's say that in local coordinate patches, $ M $ has
coordinates $ y ^ {\mathsf{a} } $ and $ N $ has coordinates
$ x ^ {i} $ respectively. We consider a function
$ \Phi ^ {i} : M \rightarrow N $ takes as input the $ \text{dim } M $
coordinates on $ M $ and returns $ \text{dim } N $ coordinates (one for
each $ i $) on $ N $. Now, a vector $ X $ on $ M $ can be written in local
coordinates as
\begin{equation}
X = X ^ {\mathsf{a} } \frac{\partial }{\partial y ^ {\mathsf{a} } }  = \left( X ^ {\mathsf{a} } \frac{\partial \Phi ^ {i} }{\partial y ^ {\mathsf{a} }} \right) \frac{\partial }{\partial x ^ {i} }  \ ,
\end{equation}
where in the second equality we have used the chain rule. Notice that
the second form makes it look like a vector field that lives on $ N
$. We say that we have pushed the vector forward using the map $ \Phi
$, and this vector on $ N $ is now denoted $ \Phi _ {\star } X $.

Differential forms, on the other hand, move in the opposite
direction. As before writing down a differential form $ \alpha $ on
$ N $, we have:
\begin{equation}
\alpha = \alpha _ {i} \text{d} x ^ {i} = \alpha _ {i} \text{d} \Phi ^ {i} (y) = \left( \alpha _ {i} \frac{\partial \Phi ^ {i} }{\partial y ^ {\mathsf{a} } }  \right)\text{d} y ^ {\mathsf{a} } \ ,
\end{equation}
and just like before we have used the chain rule in the third
equality. Notice that the last expression looks like a differential
form that lives on $ M $. We say that the form $ \alpha  $ has been
pulled back using the map $ \Phi  $, and the form on $ M $ is now
denoted $ \Phi ^ {\star } \alpha  $.

It is rather straightforward to see, based on the above expressions, that
\begin{equation}
(\Phi^{\star}\alpha)(X)=\alpha(\Phi _ {\star}X) \ .
\label{eq:pullback-one-form}
\end{equation}
Notice that in our discussion of pushforwards and pullbacks, nowhere
did we require that $ M $ and $ N $ be different manifolds. In fact,
all this machinery goes through for ordinary diffeomorphisms, even
canonical transformations. Going forward, we will often express any
invariance properties under transformations in these terms, since they
are explicitly coordinate-free.