---
title: "Symplectic Geometry"
date: 2026-08-07
categories: 
  - Physics
excerpt: >
  The geometry underlying classical mechanics.
---

We have already seen that canonical
transformations can rotate positions and momenta into each
other. These labels, therefore, have no invariant meaning, and so it
is helpful to adopt a more covariant notation: let $ \mathsf{a} $ take
values in $ \left\lbrace 1, \cdots , 2N \right\rbrace $, such that

$$
y ^{\mathsf{a} } = \begin{cases}
 q _ {a} \ , & \text{if} \quad 1 \leq \mathsf{a}  \leq N \\ 
 p ^{a} \ , & \text{if} \quad N+1 \leq \mathsf{a}  \leq 2N \ . 
\end{cases}
$$

Similarly, let
$ \partial _ {\mathsf{a} } = \partial /\partial y ^{\mathsf{a} } $.  In
terms of these phase space coordinates $ y ^{\mathsf{a} } $, the
fundamental Poisson brackets
can now be written as
\begin{equation}
\left\lbrace y ^{\mathsf{a} }, y ^{\mathsf{b} } \right\rbrace = \epsilon ^{\mathsf{ab} } \ ,
\end{equation}
where $ \epsilon  $ is the constant antisymmetric $ 2N \times 2N $
matrix, written in terms of $ N \times N $ blocks as

$$
\epsilon ^{\textsf{ab} } = \begin{pmatrix}
  0 & \mathbf{1} \\
  -\mathbf{1} & 0
\end{pmatrix} \ .
$$

This choice of coordinates is sometimes referred to as the Darboux
coordinates. Hamilton's equations can be
rewritten as
\begin{equation}
\dot{y} ^{\mathsf{a} } = \left\lbrace y ^{\mathsf{a} }, H \right\rbrace = \epsilon ^{\mathsf{ab} } \, \partial _ {\mathsf{b} }H \ ,
\end{equation}
and the Poisson brackets of any two functions can be written as
\begin{equation}
\left\lbrace A,B \right\rbrace = \epsilon ^{\mathsf{ab} }\,\partial _ {\mathsf{a} }A \,\partial _ {\mathsf{b} }B \ .
\end{equation}

More generally, we will find it convenient to depart from strictly
canonical coordinates on phase space that obey
\eqref{eq:fundamental-Poisson-brackets} and instead work with
coordinates that satisfy
\begin{equation}
\left\lbrace y ^{\mathsf{a} }, y ^{\mathsf{b} } \right\rbrace = \omega ^{\mathsf{ab} }(y) \ .
\end{equation}
The matrix $ \omega ^{\mathsf{ab} } $ is now not necessarily a
constant, and can depend on the point in phase space where this
Poisson bracket is being computed. From the antisymmetry of the
Poisson bracket, we have that
\begin{equation}
\omega ^{\mathsf{ab} } = - \omega ^{\mathsf{ba} } \ .
\end{equation}
Further, we will insist on $ \omega ^{\mathsf{ab} } $ being
invertible, and denote its inverse with lowered indices such that
\begin{equation}
\omega ^{\mathsf{ab} } \omega _ {\mathsf{bc} } = \delta ^{\mathsf{a} }_ {\mathsf{c} } \ .
\end{equation}
Finally, from the Jacobi identity we derive the
following condition:

$$
  \begin{align}
    \left\lbrace y ^{a}, \left\lbrace y ^{b}, y ^{c} \right\rbrace
    \right\rbrace +
    \left\lbrace y ^{c}, \left\lbrace y ^{a}, y ^{b} \right\rbrace
    \right\rbrace +
    \left\lbrace y ^{b}, \left\lbrace y ^{c}, y ^{a} \right\rbrace
    \right\rbrace &= 0 \\
    \Rightarrow \partial _ {\mathsf{a} } \omega _ {\mathsf{bc} } +
    \partial _ {\mathsf{c} } \omega _ {\mathsf{ab} } + \partial
    _ {\mathsf{b} } \omega _ {\mathsf{ca} } &= 0 \ .
  \end{align}
$$

Taken together, we conclude that phase space comes equipped with a
second-rank antisymmetric tensor $ \omega _ {\mathsf{ab} } $ that is
everywhere invertible and satisfies Bianchi's identity. This is called
a symplectic manifold. The tensor $ \omega _ {\mathsf{ab} } $ may be
thought of as analogous to the metric tensor on a Riemannian manifold,
just as canonical transformations are analogous to coordinate
transformations. 
