---
title: "Group Actions and Infinitesimal Symmetries"
date: 2026-09-07 20:00:00 +0530
categories: 
  - Physics
excerpt: >
  Group actions on phase space.
---

We have already seen that a function on phase space can generate a
canonical transformation. We now want to understand what happens when
these transformations have a group structure, i.e.~ essentially that
they can be composed and inverted. The motivation for this should be
self-evident --- the theory of groups was in fact founded upon
considerations of symmetry --- but rather than beginning with the
abstract definition of a group action, let us start with two simple
examples.

## Translations

Consider first a particle moving on a line. A translation by a
distance $a$ acts on phase space as
\begin{equation}
T _ {a}(q,p)=(q+a,p) \ .
\label{eq:position-translation-finite}
\end{equation}
Performing a translation by $b$ and then one by $a$ gives

$$
\begin{align}
T _ {a}\bigl(T _ {b}(q,p)\bigr)
&=T _ {a}(q+b,p) \ ,
\notag\\
&=(q+a+b,p)
=T _ {a+b}(q,p) \ .
\end{align}
$$

The transformations reproduce the addition law on $\mathbb{R}$. Note
also that a translation by $ 0 $ serves as an identity element,
$T _ {0}$, and that every translation $ T _ {a} $ has a unique inverse
of $T _ {a}$ is $T _ {-a}$. These are the properties one typically
looks for in a group. And, although it is not essential, note that
translations along a line commute: $ T _ {a+b} = T _ {b+a}
$. Translations along a line are an example of an Abelian group, whose
transformations preserve the symplectic form:
\begin{equation}
T _ {a}^{\star}\omega
=\mathrm{d}p\wedge\mathrm{d}(q+a) = \mathrm{d}p\wedge\mathrm{d}q
=\omega \ .
\end{equation}

We want to consider the case of infinitesimal transformations, so set
$a=s u$, where $s$ is some small parameter. The infinitesimal
transformation is easily computed to be
\begin{equation}
\left.\frac{\mathrm{d}}{\mathrm{d}s}\right| _ {s=0}T _ {s u}(q,p)
=(u,0) \ ,
\end{equation}
so we can read off the corresponding vector field:
\begin{equation}
u _ {M}=u\frac{\partial}{\partial q} \ .
\label{eq:translation-fundamental-vector-field}
\end{equation}
Contracting this vector with $\omega$ gives
\begin{equation}
\iota _ {u _ {M}}\omega
=\iota _ {u\partial _ {q}}
  (\mathrm{d}p\wedge\mathrm{d}q) =-u\mathrm{d}p
=-\mathrm{d}(up) \ .
\end{equation}
Recall that a function $ f $ associated to the vector field
$ X _ {f} $ is said to be a generator of canonical transformations if
it safisfies
\begin{equation}
  \iota _ {X _ {f}  } = - \text{d} f \ ,
\end{equation}
Therefore, on comparing the two equations above we conclude that the
generator of translations is (upto a multiplicative constant) the
momentum:  $J _ {u}=up$.

## Rotations

Now consider a particle moving in a plane. An infinitesimal rotation
acts as
\begin{equation}
\delta q _ {1}=-\epsilon q _ {2} \quad \text{and} \quad 
\delta q _ {2}=\epsilon q _ {1} \ ,
\end{equation}
and similarly for momenta:
\begin{equation}
\delta p^{1}=-\epsilon p^{2} \quad \text{and} \quad 
\delta p^{2}=\epsilon p^{1} \ .
\end{equation}
To find its generator, we make use of the fact that
$\delta _ {f} g = \left\lbrace g,f \right\rbrace$. The generator $ J
$ is such that the position
transformations require 
\begin{equation}
\frac{\partial J}{\partial p^{1}}=-q _ {2} \quad \text{and} \quad 
\frac{\partial J}{\partial p^{2}}=q _ {1} \ ,
\end{equation}
which allows us to conclude that 
\begin{equation}
J=q _ {1}p^{2}-q _ {2}p^{1}+f(q _ {1},q _ {2}) \ .
\end{equation}
The momentum transformations require
\begin{equation}
-\frac{\partial J}{\partial q _ {1}}=-p^{2} \quad \text{and} \quad 
-\frac{\partial J}{\partial q _ {2}}=p^{1} \ ,
\end{equation}
which allows us to conclude that $f$ is constant. We may as well
choose this constant to be zero, so we have:
\begin{equation}
J=L=q _ {1}p^{2}-q _ {2}p^{1} \ .
\label{eq:planar-angular-momentum}
\end{equation}
Thus, we find another familiar sentence: the generator of rotations is
angular momentum, in the same way that the generator of translations
is linear momentum. These examples contain everything we need to study
the notion of a group action in general.

## Abstracting Away

Let $G$ be a Lie group with Lie algebra $\mathfrak{g}$. A (left) group
action on phase space is a map
\begin{equation}
\Phi:G\times M\longrightarrow M \quad \text{with} \quad 
(g,x)\longmapsto g\mathbin{\boldsymbol{\cdot}}x \ ,
\end{equation}
such that
\begin{equation}
e \mathbin{\boldsymbol{\cdot}} x=x \quad \text{and} \quad 
g _ {1}\mathbin{\boldsymbol{\cdot}}
\bigl(g _ {2}\mathbin{\boldsymbol{\cdot}}x\bigr)
=(g _ {1}g _ {2})\mathbin{\boldsymbol{\cdot}}x \ .
\label{eq:left-group-action}
\end{equation}
Rotations in three dimensions, for example, correspond to
$G=\text{SO}(3)$.

An element $\xi\in\mathfrak{g}$ selects a one-parameter family
$g= \exp(s\xi)\in G$ parameterised by $ s $. Its infinitesimal action is
the vector field
\begin{equation}
\xi _ {M}(x)
=\left.\frac{\mathrm{d}}{\mathrm{d}s}\right| _ {s=0}
\exp(s\xi)\mathbin{\boldsymbol{\cdot}}x \ .
\label{eq:fundamental-vector-field-left-action}
\end{equation}
This group action is said to be symplectic if it preserves the
symplectic $ 2 $-form:
\begin{equation}
\Phi _ {g}^{\star}\omega=\omega \ .
\label{eq:symplectic-group-action}
\end{equation}
Putting $g=\exp(s\xi)$ and differentiating gives us an object we have
seen before: the Lie derivative along a flow, which in this case is
generated by the group action:
\begin{equation}
0=\left.\frac{\mathrm{d}}{\mathrm{d}s}\right| _ {s=0}
\Phi _ {\exp(s\xi)}^{\star}\omega
=\mathcal{L} _ {\xi _ {M}}\omega \ .
\label{eq:infinitesimal-symplectic-action}
\end{equation}
The action is, additionally, a symmetry of the dynamics if it
preserves $H$. Infinitesimally, we write:
\begin{equation}
0=\left.\frac{\mathrm{d}}{\mathrm{d}s}\right| _ {s=0}
H\bigl(\exp(s\xi)\mathbin{\boldsymbol{\cdot}}x\bigr)
=\xi _ {M}[H] \ .
\label{eq:infinitesimal-hamiltonian-invariance}
\end{equation}

It is often the case that the symmetries of mechanical systems are
easiest to write down in configuration space. Suppose, for instance,
that we are interested in symmetry transformations of the form
\begin{equation}
\delta q _ {a}=\epsilon\xi _ {a}(q) \ .
\end{equation}
We have seen earlier that pullbacks "commute" with exterior
derivatives:
$ \Phi ^ {\star } \left( \text{d} \alpha \right) = \text{d} \left(
  \Phi ^ {\star } \alpha \right) $. We want to see what this symmetry
transformation looks like in phase space, and since symmetries
preserve the symplectic form, by this commuting we may conclude that
they must also preserve the canonical $ 1 $-form
$ \theta = p ^ {a} \text{d} q _ {a} $. Since
\begin{equation}
\mathrm{d}q' _ {a}
=\mathrm{d}q _ {a}
+\epsilon\frac{\partial\xi _ {a}}{\partial q _ {b}}
 \mathrm{d}q _ {b} \ ,
\end{equation}
write $p'^{a}=p^{a}+\epsilon\Delta p^{a}$ and expand:
\begin{align}
p'^{a}\mathrm{d}q' _ {a}
&=p^{a}\mathrm{d}q _ {a}
+\epsilon\left(
\Delta p^{b}
+p^{a}\frac{\partial\xi _ {a}}{\partial q _ {b}}
\right)\mathrm{d}q _ {b}
+\mathcal{O}(\epsilon^{2}) \ .
\end{align}
Preservation of $\theta$ requires that
\begin{equation}
\Delta p^{a}
=-p^{b}\frac{\partial\xi _ {b}}{\partial q _ {a}} \ .
\end{equation}
Thus, on phase space the symmetry transformations are realised as
\begin{equation}
\delta q _ {a}=\epsilon\xi _ {a}(q) \quad \text{and} \quad 
\delta p^{a}
=-\epsilon p^{b}\frac{\partial\xi _ {b}}{\partial q _ {a}} \ .
\label{eq:cotangent-lift-infinitesimal-coordinates}
\end{equation}
These transformations are easily seen to be generated by
\begin{equation}
J _ {\xi}=p^{a}\xi _ {a}(q) \ ,
\label{eq:cotangent-lift-generator}
\end{equation}
because

$$
  \begin{align}
\left\lbrace q _ {a},J _ {\xi}\right\rbrace
&=\frac{\partial J _ {\xi}}{\partial p^{a}}
=\xi _ {a}(q) \ , \\
\left\lbrace p^{a},J _ {\xi}\right\rbrace
&=-\frac{\partial J _ {\xi}}{\partial q _ {a}}
=-p^{b}\frac{\partial\xi _ {b}}{\partial q _ {a}} \ .
  \end{align}
$$