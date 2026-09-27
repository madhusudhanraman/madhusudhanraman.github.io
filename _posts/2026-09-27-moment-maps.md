---
title: "Moment Maps"
date: 2026-09-27 20:00:00 +0530
categories: 
  - Physics
excerpt: >
  Defining the moment map.
---

The simple examples we have encountered in the previous section on
infinitesimal symmetries and group actions suggest a more general
picture, which we develop here: every infinitesimal symmetry labelled
by $\xi$ is associated to a generating function $J _ {\xi}$. A moment
map, which we will define here, packages all these functions into a
single mathematical object.

Let a group $G$ act on a symplectic manifold $(M,\omega)$, and let
this action be symplectic, i.e.
$ \mathcal{L}_ {\xi _ {M} } \omega = 0 $. This means
\begin{equation}
\mathcal{L} _ {\xi _ {M}}\omega = 0
=\mathrm{d}\left(\iota _ {\xi _ {M}}\omega\right) \ ,
\end{equation}
where in the second equality we have used Cartan's magic formula and
the fact that the symplectic form is closed:
$\mathrm{d}\omega=0$. Thus, $\iota _ {\xi _ {M}}\omega$ is closed. If
it is exact, there exists a function $J _ {\xi}$ satisfying
\begin{equation}
\iota _ {\xi _ {M}}\omega=-\mathrm{d}J _ {\xi} \ ,
\label{eq:moment-map-component-condition}
\end{equation}
or that the function $ J _ {\xi }  $ is the Hamiltonian function
corresponding to the Hamiltonian vector field $ \xi _ {M}  $.

Recall too that in the previous section we associated to a Lie algebra
element $ \xi \in \mathfrak{g} $ a vector field $ \xi _ {M} $ on $ M $
as
\begin{equation}
\xi _ {M} (x) = \left. \frac{\text{d} }{\text{d} s} \right\vert _ {s=0} e^{s \xi } \cdot x \ .
\end{equation}
Let $T _ {a}$ form a basis of $\mathfrak{g}$ so
$\xi=\xi^{a}T _ {a}$. Then from the above procedure it follows that
\begin{equation}
\xi _ {M} = \xi ^ {a} \left( T _ {a}  \right)_ {M} \ , 
\end{equation}
since each basis element of $ \mathfrak{g} $ descends to a vector
field on $ M $. Each such basis element would have an associated
Hamiltonian function $ J _ {a}  $:
\begin{equation}
\iota _ {\left( T _ {a}  \right)_ {M} } \omega = - \text{d} J _ {a} \ ,
\end{equation}
and therefore for any $ \xi _ {M}  $ by linearity we have
\begin{equation}
\iota _ {\xi _ {M} } \omega = - \text{d} \left( \xi ^ {a} J _ {a}  \right) \ ,
\end{equation}
which we may call $ J _ {\xi } = \xi ^ {a} J _ {a}  $.

Now, $ J _ {\xi } $ is a vector field on $ M $ --- what about
$ J _ {a} $? That is, where do the components $ J _ {a} $ live? In
order to answer this question, consider the dual
$ \mathfrak{g} ^ {\star } $ of the Lie algebra, i.e. the space of linear
maps from the Lie algebra $ \mathfrak{g} $ into $ \mathbb{R} $. If
$T^{\star a}$ is the dual basis such that
\begin{equation}
\left\langle T ^ {\star a} , T _ {b}  \right\rangle = \delta  ^ {a} {} _ {b} \ ,
\end{equation}
then we define the moment map to be
\begin{equation}
J:M\longrightarrow\mathfrak{g}^{\star} \quad \text{such that} \quad 
J(x)=J _ {a}(x)T^{\star a} \ ,
\label{eq:moment-map-definition}
\end{equation}
or, equivalently,
\begin{equation}
\langle J(x),\xi\rangle=J _ {\xi}(x) \ .
\label{eq:moment-map-pairing}
\end{equation}

Let's see how this works out in the examples we discussed in the
earlier section. For translations in $\mathbb{R}^{n}$,
\begin{equation}
\iota _ {u _ {\mathsf{a} } \partial _ {q _ {\mathsf{a} } } }\omega
=-u _ {\mathsf{a} }\mathrm{d}p^{\mathsf{a} } = -\mathrm{d}(u _ {\mathsf{a} }p^{\mathsf{a} }) \ .
\end{equation}
Hence
\begin{equation}
J _ {u}=u _ {\mathsf{a} }p^{\mathsf{a} } \quad \text{and} \quad J(q,p)=p \ .
\label{eq:translation-moment-map}
\end{equation}

For rotations in three dimensions,
\begin{equation}
J _ {\boldsymbol{\xi}}
=\boldsymbol{p} \cdot 
  \left(\boldsymbol{\xi}
  \times \boldsymbol{q}\right)
=\boldsymbol{\xi}\cdot 
  \left(\boldsymbol{q}
  \times \boldsymbol{p}\right) \ ,
\end{equation}
and so we read off the moment map
\begin{equation}
J(\boldsymbol{q},\boldsymbol{p})
=\boldsymbol{q}\times \boldsymbol{p} \ .
\label{eq:rotation-moment-map}
\end{equation}
In both these examples, the physical significance of the moment map is
transparent: when paired with an infinitesimal transformation, it
gives the component of the conserved charge (here, the linear or
angular momentum) associated with that infinitesimal
transformation. So, pairing the moment map for translations with an
infinitesimal displacement gives the momentum in the direction of
translation, and pairing the moment map for rotations with an
infinitesimal rotation gives the angular momentum about the axis of
rotation. 

If $H$ is invariant under the $G$-action, then as we have already seen:
\begin{equation}
0=\xi _ {M}[H]
=X _ {J _ {\xi}}[H]
=\{H,J _ {\xi}\} \ .
\end{equation}
Therefore,
\begin{equation}
\frac{\mathrm{d}J _ {\xi}}{\mathrm{d}t}
=\{J _ {\xi},H\}
=0 \ .
\label{eq:moment-map-charge-conservation}
\end{equation}

There is, of course, the usual global subtlety. A symplectic action
only guarantees that $\iota _ {\xi _ {M}}\omega$ is closed; the
existence of a globally defined charge requires it to be exact. On the
torus example we discussed earlier,
$\iota _ {\partial/\partial x}\omega=\mathrm{d}y$ is closed, but the
periodic coordinate $y$ is not a globally defined real-valued
function. The translation is then symplectic but has no globally
defined generator.