---
title: "The Oscillator Formalism: Higher Dimensions"
date: 2026-08-07
categories: 
  - Physics
excerpt: >
  Extending the oscillator formalism to unitary groups with higher rank.
---

The Lie algebra $ \mathfrak{su}(2) $ is insufficiently generic, and it
is profitable at this stage to ask: to what extent does the oscillator formalism
generalise to $ \mathfrak{su}(d) $? In order to suggest a natural
generalisation to $ \mathfrak{su}(d) $ it is helpful to rewrite the
results of the [previous section](https://madhusudhanraman.github.io/physics/oscillator-formalism-su2/) 
(for $ d=2 $) as follows. First, define the bilinears
\begin{equation}
  \label{eq:Eij-defn}
E _ {ij} = a ^{\dagger }_ {i} a _ {j} \ ,
\end{equation}
whose algebra is easily derived from the canonical commutation relations
of creation and annihilation operators
as
\begin{equation}
  \label{eq:uN-algebra}
\left[ E _ {ij}, E _ {k \ell } \right] = \delta _ {jk}E _ {i \ell } - \delta _ {i \ell } E _ {kj} \ .
\end{equation}
It is easy
to check that for the case of $\mathfrak{su}(2)$
\begin{equation}
  \label{eq:su2-Eij-pauli}
K _ {a} = \frac{1}{2} \, E _ {ij} \left( \sigma _ {a}  \right)_ {ij} \ ,
\end{equation}
where we have an implicit sum over the repeated oscillator indices.

In this avatar, it is now clear how to extend the discussion of the
previous section to higher $ d $. The algebra in \eqref{eq:uN-algebra}
is the Lie algebra for $ \mathfrak{u}(d) $, which differs from
$ \mathfrak{su}(d) $ by an additional tracelessness condition on the
generators. Therefore, increasing the number of oscillators from
$ d=2 $ to (say) $ d=3 $ should give us the unitary irreducible
representations of $ \text{su}(d) $. Consequently, we start with the
Hamiltonian of an isotropic three-dimensional oscillator with unit
angular frequency:

$$
\begin{align}
    H &=\sum_ {i=1}^{3} E _ {ii} + \frac{3}{2} \ , \\
    &=\sum_ {i=1}^{3} N _ {i} + \frac{3}{2} = N + \frac{3}{2}  \ . \label{eq:3d-hamiltonian}
\end{align}
$$

where $i \in \left\lbrace 1,2,3 \right\rbrace$ and $ N $ is the total
number operator. The degeneracy is easily counted to be
$\frac{1}{2}(N+1)(N+2)$, and there are six operators that move one
within a degenerate subspace which are of the form $ E _ {ij} $ with
$ i \neq j $.

As in the previous section, we will need to augment this list of six
operators in order to derive a closed algebra. Notice that from
\eqref{eq:uN-algebra},
\begin{equation}
\left[ E _ {ij}, E _ {ji} \right] = E _ {ii} - E _ {jj} = N _ {i} - N _ {j} \ .
\end{equation}
This would seem to suggest there are three additional operators we
need to add, each of the form $ N _ {i} - N _ {j} $ for $ i \neq j $,
but notice that these operators are not linearly
independent. Therefore, we just need to add two, giving a total of
eight operators that generate the $ \mathfrak{su}(3) $ Lie
algebra.

This is to be expected, since any element of $ \text{SU}(d) $ can be
written as $ e^{i a F} $ where $ F $ is a $ d \times d $ traceless
Hermitian matrix. Now, a $ d \times d $ Hermitian matrix has
$ d ^{2} $ independent components, but tracelessness supplies one
condition, leaving $ d ^{2}-1 $ independent parameters, which for
$ d = 3 $ once again gives eight independent generators. These are
conventionally taken to be proportional to the Gell-Mann matrices
$ t _ {a} = \frac{1}{2} \lambda _ {a} $. You can look up the
Gell-Mann matrices [here](https://en.wikipedia.org/wiki/Gell-Mann_matrices).

These matrices are normalised so that
$\operatorname{Tr}\left(t_ {a} t_ {b}\right)=\frac{1}{2} \delta_ {a b}$,
and their algebra is
\begin{equation}
  \label{eq:su3-algebra}
\left[t_ {a}, t_ {b}\right]=i f_ {a b c} t_ {c} \ ,
\end{equation}
where the $f_ {a b c}$ are called structure constants. This is the
$ \mathfrak{su}(3) $ Lie algebra.

Analogously to \eqref{eq:su2-Eij-pauli}, we consider the operators
\begin{equation}
T_ {a} = E _ {ij} \left( t_ {a} \right)_ {ij} \ .
\end{equation}
In the above equation, the indices
$ \left\lbrace i, j, \cdots \right\rbrace \in \left\lbrace 1, 2 , 3
\right\rbrace $ and
$ \left\lbrace a, b, c, \cdots \right\rbrace \in \left\lbrace 1,
  \cdots , 8 \right\rbrace $. Now, the $ T ^{a} $ are Hermitian,
courtesy of the Hermiticity of the Gell-Mann matrices. From
\eqref{eq:uN-algebra} and \eqref{eq:su3-algebra}, one can easily verify that the $
T _ {a} $ satisfy the $ \mathfrak{su}(3) $ Lie algebra. Finally, each
of the $ T _ {a} $ commute with $ N _ {i} = E _ {ii} $, and therefore
from \eqref{eq:3d-hamiltonian} that the Hamiltonian commutes with each
of the $ T _ {a} $, i.e. the $ T _ {a} $ will only move states within a
degenerate subspace. We can conclude at this point that the degenerate
states
\begin{equation}
  \label{eq:oscillator-su3-states}
\left[\prod _ {i=1} ^{3} \frac{1}{\sqrt{N _ {i}!} } \left( a _ {i}^{\dagger } \right)^{N _ {i}} \right] \left\vert 0 \right\rangle \ ,
\end{equation}
with fixed $ N = \sum_ {i=1}^{3} N _ {i} $ of the three-dimensional
isotropic harmonic oscillator form unitary irreducible representations
of $ \text{SU}(3) $ of dimensions
\begin{equation}
  \label{eq:oscillator-su3-dimension}
\frac{1}{2} \left( N+1 \right) \left( N+2 \right) \ .
\end{equation}

These conclusions are easily generalised to $ \text{SU}(d) $. In
much the same way as we have outlined here, we first construct
operators of the form $T_ {a}= E _ {ij} \left( t _ {a} \right)_ {ij} $
where the $t^{a}$ are $ d ^{2}-1 $ traceless $d \times d$ Hermitian
matrices, and $a_ {i}^{\dagger}$ and $a_ {i}$ are the creation and
annihilation operators of a $d$-dimensional isotropic harmonic
oscillator, whose degenerate subspaces form unitary irreducible
representations of $ \text{SU}(d) $.