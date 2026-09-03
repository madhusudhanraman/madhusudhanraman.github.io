---
title: "Symplectic Geometry, Revisited"
date: 2026-09-03 15:00:00 +0530
categories: 
  - Physics
excerpt: >
  Rephrasing some earlier results, only this time geometrically.
---

We are now in a position to re-introduce symplectic manifolds, only
this time more formally, and equipped with some more machinery.

A symplectic manifold is an even-dimensional manifold $M$ (we'll see
why shortly!) equipped with an $\omega\in\Omega^{2}(M)$
called the symplectic $ 2 $-form
that satisfies two conditions. The first is that it is closed:
\begin{equation}
\mathrm{d}\omega=0 \ .
\label{eq:symplectic-closed}
\end{equation}
The second is that it is non-degenerate, meaning if a vector $X$ satisfies
\begin{equation}
\omega(X,Y)=0
\quad \text{for every} \quad Y\in TM \ ,
\end{equation}
then it must be that $X=0$. Equivalently, the map
\begin{equation}
TM\longrightarrow T^{\star}M  \quad \text{that sends} \quad  X\longmapsto\iota _ {X}\omega \ ,
\label{eq:symplectic-identification}
\end{equation}
is invertible. Here $\iota _ {X}\omega$ denotes the one-form obtained
by inserting $X$ into the first slot of $\omega$; we will define
this "contraction" operation more generally in the following section.

It is useful to rephrase the above conditions in terms of
coordinates. The symplectic $ 2 $-form in some choice of local
coordinates $ y ^ {\mathsf{a} }  $ is:
\begin{equation}
\omega=\frac{1}{2}\omega _ {\mathsf{ab}}(y)\,
\mathrm{d}y^{\mathsf{a}}\wedge\mathrm{d}y^{\mathsf{b}} \ .
\label{eq:symplectic-form-components}
\end{equation}
Since the wedge product is antisymmetric, we must have
$\omega _ {\mathsf{ab}}=-\omega _ {\mathsf{ba}}$. The non-degeneracy
of the symplectic form implies that the matrix
$\omega _ {\mathsf{ab}}$ is invertible. Finally, closure gives
\begin{equation}
\partial _ {\mathsf{a}}\omega _ {\mathsf{bc}}
+\partial _ {\mathsf{b}}\omega _ {\mathsf{ca}}
+\partial _ {\mathsf{c}}\omega _ {\mathsf{ab}}=0 \ .
\end{equation}
In the above equation, we have used the definition of the exterior
derivative, and the aforementioned antisymmetry of
$ \omega _ {\mathsf{ab} } $. An invertible antisymmetric matrix can
only exist in even dimensions so every symplectic manifold has
dimension $2N$.

The inverse of $\omega _ {\mathsf{ab}}$ will be denoted
$\omega^{\mathsf{ab}}$:
\begin{equation}
\omega^{\mathsf{ab}}\omega _ {\mathsf{bc}}
=\delta^{\mathsf{a}} _ {\mathsf{c}} \ .
\end{equation}
It defines the Poisson bracket of two functions $f,g\in\Omega^{0}(M)$,
\begin{equation}
\left\lbrace f,g\right\rbrace
=\omega^{\mathsf{ab}}\partial _ {\mathsf{a}}f\,
\partial _ {\mathsf{b}}g \ .
\label{eq:poisson-symplectic}
\end{equation}
The antisymmetry of this bracket follows from the antisymmetry of
$\omega^{\mathsf{ab}}$, while its Jacobi identity is equivalent to
$\mathrm{d}\omega=0$.

These are precisely the properties encountered when we were motivating
the introduction of symplectic geometry, so although it is mildly
repetitive, I hope it is clear how symplectic geometry is the
"natural" home for classical dynamics. The fact that the
corresponding home for quantum mechanics is a Hilbert space, and the
question of how one goes over into the other, is a question that will
occupy us for some time during the latter part of these notes.

As we have mentioned before, a theorem due to Darboux states that in a
sufficiently small neighbourhood of every point, coordinates
$(q _ {a},p^{a})$ can be chosen such that
\begin{equation}
\omega=\mathrm{d}p^{a}\wedge\mathrm{d}q _ {a} \ .
\label{eq:symplectic-darboux}
\end{equation}
In these coordinates, $\omega$ clearly has constant components --- as
we have seen before --- and its inverse reproduces
\begin{equation}
\left\lbrace q _ {a},p^{b}\right\rbrace
=\delta _ {a}{}^{b} \ .
\end{equation}
The conclusion we draw from this is rather striking: symplectic
manifolds, in a small neighbourhood around every point, always look
like ordinary phase space. The interesting distinction between
symplectic manifolds (of the same dimension, naturally) is in their
\emph{global} structure.

In the Darboux coordinates (meaning locally) it is useful to introduce
what is called the canonical one-form
\begin{equation}
\theta=p^{a}\,\mathrm{d}q _ {a} \ ,
\label{eq:canonical-one-form}
\end{equation}
for which $\omega=\mathrm{d}\theta$. A symplectic form is always
locally of this form, but a globally defined $\theta$ need not
exist. Thus, every exact symplectic form is closed, but a closed
symplectic form need not be globally exact. We saw a version of this
statement earlier, for forms in general, and here it is specialised to
the case of symplectic manifolds. 

A diffeomorphism $\Phi:M\rightarrow M$ is called a canonical
transformation (or, in mathematics, a symplectomorphism)
if it preserves the symplectic form: 
\begin{equation}
\Phi^{\star}\omega=\omega \ .
\label{eq:symplectomorphism}
\end{equation}
In Darboux coordinates, this is nothing but the coordinate-independent
definition of a canonical transformation. Indeed, since the Poisson
brackets are defined using the inverse of the symplectic form,
\eqref{eq:symplectomorphism} guarantees that Poisson brackets are
preserved under canonical transformations:
\begin{equation}
\Phi^{\star}\left\lbrace f,g\right\rbrace
=\left\lbrace \Phi^{\star}f,\Phi^{\star}g\right\rbrace \ .
\end{equation}
We see in geometric language what we saw earlier: that what we call
position and momenta depends on a choice of local coordinates, but the
physics of a classical dynamical system is invariant under canonical
transformations that exchange or otherwise mix up such labels.

This invariant definition also recovers the generating functions
of canonical transformations introduced earlier. In a Darboux patch where
$\omega=\mathrm{d}\theta$, a symplectomorphism satisfies
\begin{equation}
\mathrm{d}\left(\Phi^{\star}\theta-\theta\right)
=\Phi^{\star}\omega-\omega=0 \ .
\end{equation}
The difference $\Phi^{\star}\vartheta-\vartheta$ is therefore locally
exact, and hence
\begin{equation}
\Phi^{\star}\theta=\theta+\mathrm{d}G
\end{equation}
for some function $G$, which is precisely the generator of canonical
transformations. Thus, the statement that the canonical one-form
changes by a total derivative is the local counterpart of the
invariant condition $\Phi^{\star}\omega=\omega$.

## The Symplectic Volume Form
On a $2N$-dimensional symplectic manifold, the highest non-vanishing
wedge power of $\omega$ is
\begin{equation}
\operatorname{vol} _ {\omega}
=\frac{1}{N!}\underbrace{\omega\wedge\cdots\wedge\omega}_{N\ \text{factors}}
=\frac{1}{N!}\omega^{N} \ .
\label{eq:symplectic-volume}
\end{equation}
Now, the non-degeneracy of $\omega$ guarantees that
$\operatorname{vol} _ {\omega}$ is nowhere vanishing. It is therefore
a volume form and, in particular, supplies every symplectic manifold
with a natural orientation. In Darboux coordinates,
\begin{equation}
\operatorname{vol} _ {\omega}
=\mathrm{d}p^{1}\wedge\mathrm{d}q _ {1}\wedge\cdots\wedge
\mathrm{d}p^{N}\wedge\mathrm{d}q _ {N} \ ,
\end{equation}
This is the invariant form of the measure on phase space.

Canonical transformations preserve this volume form, since they
preserve the symplectic form:
\begin{equation}
\Phi^{\star}\operatorname{vol} _ {\omega}
=\operatorname{vol} _ {\omega} \ .
\label{eq:canonical-volume-invariance}
\end{equation}
This is the geometric version of Liouville's theorem, which states
that infinitesimal volumes in phase space (measured by the above
volume form) are invariant under canonical transformations in general,
and since time evolution is a canonical transformation generated by
the Hamiltonian, under time evolution in particular. 
