---
title: "The Oscillator Formalism"
date: 2026-08-01
categories: 
  - Physics
excerpt: >
  Using a pair of harmonic oscillators to build up representations of SU(2).
---

The oscillator formalism was developed by Jordan and (independently
by) Schwinger to construct irreducible representations of
$\text{SU}(2)$ in the following papers:

_Der Zusammenhang der symmetrischen und linearen Gruppen und das
Mehrkörperproblem_\
P. Jordan\
Zeitschrift für Physik **94** (1935), No. 7, 531–535.

_On Angular Momentum_\
J. Schwinger\
[Technical Report
NYO-3071](https://www.osti.gov/biblio/4389568), Harvard University\
and Nuclear Development Associates, Inc. (US), 1952.

## Symmetries in Quantum Theory

Before we consider specific examples, it is useful to consider in an
abstract, formal sense what happens to the spectrum of a Hamiltonian
in the presence of a symmetry. Let us suppose that the dynamics of a
quantum system is governed by a Hamiltonian $H$ and that there exists
a unitary operator $\mathcal{U} = e^{i a F} $ corresponding to some
Hermitian generator $ F $. The Hamiltonian is transformed under the
action of this unitary operator as
$ H \mapsto H' = \mathcal{U} H \mathcal{U}^{\dagger }$. When $ a $ is
infinitesimal, we may expand as
\begin{equation}
H'= e^{i a F} H e^{-i a F} \approx (1+i a F) H (1-i a F)=H + i a [F, H] \ ,
\end{equation}
We conclude from this that $\delta H = + i a[F, H]$, and it follows
that if $[F, H]=0$, then $ \delta H = 0 $ and $ F $ generates a
symmetry. It is easy to see using Heisenberg's equations of motion
that if $ F $ generates a symmetry, it is conserved. This is
essentially the quantum equivalent of Noether's theorem, which we
discussed 
[here](https://madhusudhanraman.github.io/noether-current-em-duality/). 

The existence of symmetries implies strong constraints on the spectrum
of the Hamiltonian. Consider an eigenstate
$\left\vert n \right\rangle $ of the Hamiltonian with eigenvalue
$E_ {n}$. We have just seen that unitary operators corresponding to
symmetries of the Hamiltonian commute with it, i.e. if $ U $ is a
symmetry then
$ \left[ \mathcal{U}, H \right] = 0 \Rightarrow H \mathcal{U} =
\mathcal{U}H $. From this it follows that
\begin{equation}
  H(\mathcal{U} \left\vert n \right\rangle ) = \mathcal{U} H \left\vert n \right\rangle =
  E_ {n}(\mathcal{U} \left\vert n \right\rangle ) \ .
\end{equation}
That is, $\mathcal{U} \left\vert n \right\rangle $ is also an
eigenstate of the Hamiltonian with the same energy. More generally,
all states related to each other by symmetry transformations must have
the same energy. These states are sometimes said to form a multiplet.

Consider starting with a state $ \left\vert n \right\rangle $ and
acting with all elements of some group of symmetry transformations
$ \mathcal{U} _ {a} $ on $ \left\vert n \right\rangle $ to generate the
states $ \left\lbrace \left\vert n _ {a} \right\rangle \right\rbrace
$. We have already seen that all these states are degenerate. In
addition, the set
$ \left\lbrace \left\vert n _ {a} \right\rangle \right\rbrace $ so
generated is closed under the action of $ \mathcal{U} $, which in turn
implies that the matrix elements of $ \mathcal{U} $ in this degenerate
subspace
\begin{equation}
  U _ {ab} = \left\langle n _ {a} \right\vert \mathcal{U} \left\vert n _ {b} \right\rangle \ ,
\end{equation}
furnishes a finite-dimensional irreducible representation of the group
of transformations that $ \mathcal{U}_ {a} $ comes from.

In a nutshell, this is one of the reasons why quantum mechanics is
interesting to mathematicians: unitary irreducible representations of
groups are furnished by quantum systems which exhibit these
symmetries. We now proceed to a simple illustrations of this
fact.

## Jordan-Schwinger Formalism for SU(2) Representations

Let us consider a system of two harmonic oscillators, whose position
and momentum operators are labelled by the indices
$ i \in \left\lbrace 1,2 \right\rbrace $. Both oscillators are assumed
to have the same (unit) angular frequency. The Hamiltonian of this
system is then
\begin{equation}
  \label{eq:hamiltonian-2d-oscillator}
H = \sum_ {i = 1}^{2} \frac{1}{2} \left( p _ {i}^{2} + q _ {i}^{2} \right) \ .
\end{equation}
Constructing the raising $ (a ^{\dagger }_ {i}) $ and lowering
$ (a _ {i}) $ operators for both these oscillators as we usually do,
it is easy to see that the only
non-trivial commutators between them are
\begin{equation}
  \label{eq:2d-heisenberg-algebra}
\left[a_ {i}, a_ {j}^{\dagger}\right]=\delta_ {i j} \ ,
\end{equation}
and all other commutators are identically zero. In essence, this is
two copies of the Heisenberg algebra.

The Hamiltonian in \eqref{eq:hamiltonian-2d-oscillator} in terms of the
raising and lowering operators is then
\begin{equation}
H = \sum_ {i=1}^{2} \left( a ^{\dagger }_ {i}a _ {i} + \frac{1}{2}
\right) = N_ {1} + N_ {2} + 1 \ ,
\end{equation}
where $ N _ {i} = a _ {i}^{\dagger }a _ {i} $ is the number operator for
the $ i ^{\text{th}} $ oscillator. The ground state is defined by
\begin{equation}
a _ {i} \left\vert 0 \right\rangle = 0 \quad \text{for} \quad i \in \left\lbrace 1,2 \right\rbrace \ ,
\end{equation}
and has energy $ E _ {0} = 1 $. Excited states can be constructed by
acting with either of the creation operators, and since these commute
with each other, a general excited state may be labelled and
constructed as
\begin{equation}
  \label{eq:states-2d-oscillator}
\left\vert N _ {1}, N _ {2} \right\rangle = \frac{1}{\sqrt{N _ {1}! N _ {2}!} } \left( a _ {1}^{\dagger } \right)^{N _ {1}} \left( a _ {2}^{\dagger } \right)^{N _ {2}} \left\vert 0 \right\rangle \ .
\end{equation}
The degeneracy of these states is easily determined. Every state of
the form $ \left\vert k, n - k \right\rangle $ for
$ k \in \left\lbrace 0, 1, \cdots , n \right\rbrace $ is an eigenstate
of the Hamiltonian with eigenvalue $ E _ {n} = n+1 $ and there are
$ n+1 $ such states. Acting with the creation (annihilation)
operators, in the usual way, moves to higher (lower) energy
eigenstates. 

Symmetries in quantum mechanical systems present themselves to us as
degeneracies in the spectrum. We might therefore ask: what are the
operators are that take us from one degenerate state to another? It is
easy to write down two:
\begin{equation}
  \label{eq:kpm-defn}
K _ {+} = a _ {1}^{\dagger }a _ {2} \quad \text{and} \quad K _ {-} = a _ {2}^{\dagger }a _ {1} \ ,
\end{equation}
which send
\begin{equation}
    K _ {+} : \left\vert N _ {1}, N _ {2} \right\rangle \mapsto
	\left\vert N _ {1}+1, N _ {2} - 1 \right\rangle \quad \text{and} \quad
    K _ {-} : \left\vert N _ {1}, N _ {2} \right\rangle \mapsto \left\vert N _ {1} - 1, N _ {2}+1 \right\rangle \ .
\end{equation}
These are precisely the kind of operators we are looking for. On
defining the operator
\begin{equation}
  \label{eq:k3-defn}
K _ {3} = \frac{1}{2} \left( N _ {1} - N _ {2} \right) \ ,
\end{equation}
it is easy to check that the operators
$ \left\lbrace K _ {+}, K _ {-}, K _ {3} \right\rbrace $ obey the
following commutation relations:
\begin{equation}
\label{eq:Kpm3-algebra}
  \left[ K _ {+}, K _ {-} \right] = 2 K _ {3} \quad , \quad
  \left[ K _ {3}, K _ {+} \right] = + K _ {+} \quad , \quad
  \left[ K _ {3}, K _ {-} \right] = - K _ {-} \quad .
\end{equation}
This algebra ought to be familiar: on constituting the combinations
\begin{equation}
  \label{eq:k12-defn}
K _ {1} = \frac{1}{2} \left( K _ {+} + K _ {-} \right) \quad \text{and} \quad K _ {2} = \frac{1}{2i} \left( K _ {+} - K _ {-} \right) \ ,
\end{equation}
the algebra in \eqref{eq:Kpm3-algebra} simplifies to
\begin{equation}
  \label{eq:su2-algebra}
\left[ K _ {a}, K _ {b} \right] = i \epsilon _ {abc} K _ {c} \ ,
\end{equation}
where the indices
$ \left\lbrace a, b, c, \cdots \right\rbrace \in \left\lbrace 1,2,3
\right\rbrace $. This is the familiar $ \mathfrak{su}(2) $ Lie algebra.

Using the states in \eqref{eq:states-2d-oscillator}, we can construct
$ \left( n+1 \right)\times \left( n+1 \right) $ matrix representations
of the angular momentum operators using the $ n+1 $ degenerate states
corresponding to the $ n ^{\text{th}} $ excited energy level. As an
example, consider the case of $ n = 1 $, i.e. the first excited energy
level which corresponds to two degenerate states
$ \left\vert 1 \right\rangle = a _ {1}^{\dagger }\left\vert 0
\right\rangle $ and
$ \left\vert 2 \right\rangle = a _ {2}^{\dagger }\left\vert 0
\right\rangle $. The matrix elements of $ K _ {a} $ are easily computed
using \eqref{eq:kpm-defn}, \eqref{eq:k3-defn}, and \eqref{eq:k12-defn}, 
and one finds
\begin{equation}
K _ {a} = \frac{1}{2} \sigma _ {a} \ .
\end{equation}
That is, the Pauli matrices furnish a two-dimensional representation
of the $ \mathfrak{su}(2) $ Lie algebra. As another example: since the
Lie algebras $ \mathfrak{su}(2) $ and $ \mathfrak{so}(3) $ are
isomorphic, a similar exercise for the $ n=2 $ case reproduces the
three-dimensional representation of $ \mathfrak{so}(3) $ which may be
familiar to the reader as the algebra of generators of
three-dimensional rotations.

Finally, note that the $ K _ {a} $ are Hermitian matrices, which in
turn means the operators of the form $ U = e^{i K _ {a} \theta ^{a}} $
are unitary matrices. Thus, we conclude that the degenerate states of
a two-dimensional harmonic oscillator furnish a unitary representation
of $ \text{SU}(2) $.

We will discuss how this story generalises to other groups in a later
note.
