---
title: "The Landau Problem"
date: 2026-08-13 18:00:00 +0530
categories: 
  - Physics
excerpt: >
  Electrons in two dimensions and the Landau levels.
---

The problem of electrons confined to a plane pierced by a
perpendicular magnetic field is sometimes referred to as the Landau
problem. Understanding this quantum mechanical problem is a
prerequisite for understanding the physics of the integer and
fractional quantum Hall effects.

Consider the Hamiltonian
\begin{equation}
  \label{eq:landau-problem-hamiltonian}
H = \frac{1}{2m} \left( \mathbf{p} - e \mathbf{A}  \right)^ {2} \ ,
\end{equation}
where $ \mathbf{p} $ and $ m $ are the momentum and (effective) mass
of the electrons, and $ \mathbf{A} $ is the gauge potential
corresponding to a magnetic field in the symmetric gauge:
\begin{equation}
\mathbf{A} = \frac{B}{2} \left( - x _ {2} , x _ {1} , 0 \right) \ ,
\end{equation}
so that $ \mathbf{B} = \nabla \times \mathbf{A} = B
\,\widehat{\mathbf{z} }  $. Notice in particular that since $ A _ {z} =
0 $, the dynamics along the $ z $-axis can be separated out and is
free. We will pay no further attention to this fact, and use Latin
indices $ i, j, \cdots \in \left\lbrace 1,2 \right\rbrace $. 

It is useful to define the operators
\begin{equation}
\Pi _ {i}  = p _ {i}  - e A _ {i} \ ,
\end{equation}
whose commutations relations are
\begin{equation}
\left[ \Pi _ {i} , \Pi _ {j}  \right] = i \epsilon _ {ij} e B \ ,
\end{equation}
where $ \epsilon _ {ij} $ is the totally antisymmetric two-dimensional
Levi-Civita symbol. (It is useful, incidentally, to write
$ A _ {i} = -\frac{B}{2} \epsilon _ {ij} x _ {j} $ sometimes.) Our
conventions completely specified by $ \epsilon _ {12} = +1 $.

Let us also remark on the dimensions here: a simple exercise in
dimensional analysis will tell us that, in natural units (where
$ \hbar =1 $), the quantity $ eB $ has dimensions of inverse length
squared. We use the symbol
$ \ell _ {\text{B}} ^ {2} = \left( eB \right)^ {-1} $, which will be a
characteristic length scale for our problem.

Consider now the following operators constructed out of the
$ \Pi _ {i} $:
\begin{equation}
a = \frac{1}{\sqrt{2 e B} } \left( \Pi _ {1} + i \Pi _ {2}  \right) \quad \text{and} \quad a ^ {\dagger } = \frac{1}{\sqrt{2eB} } \left( \Pi _ {1} - i \Pi _ {2}  \right) \ ,
\end{equation}
which satisfy the familar commutation relations
\begin{equation}
\left[ a, a ^ {\dagger }  \right] = 1 \ ,
\end{equation}
and so the Hamiltonian in \eqref{eq:landau-problem-hamiltonian} is
equivalently expressed as
\begin{equation}
H = \frac{eB}{m} \left( a ^ {\dagger } a + \frac{1}{2}  \right) \ .
\end{equation}

Similar to our earlier discussions of the harmonic oscillator, the
ground state $ \left\vert 0 \right\rangle  $ of this problem can be
defined by the equation $ a \left\vert 0 \right\rangle = 0 $, and
excited states are constructed by successively acting on the ground
state with $ a ^ {\dagger }  $:
\begin{equation}
\left\vert n \right\rangle = \frac{1}{\sqrt{n!} } \left( a ^ {\dagger }  \right)^ {n} \left\vert 0 \right\rangle \ , 
\end{equation}
whose energy is given by
\begin{equation}
E _ {n} = \frac{eB}{m} \left( n + \frac{1}{2}  \right) \quad \text{for} \quad n \in \mathbb{N} \ .
\end{equation}
These are called Landau levels, and the state $ n = 0  $ is called the
lowest Landau level, sometimes abbreviated LLL. 

We now introduce the operators
\begin{equation}
M _ {i} = p _ {i} + e A _ {i} \ ,  
\end{equation}
which looks a lot like the $ \Pi _ {i} $ operator, but notice the
crucial sign difference! This might seem like an odd object to
consider until one computes
\begin{equation}
\left[ \Pi _ {i} , M _ {j}  \right] = 0 \ ,
\end{equation}
due to the antisymmetry of the Levi-Civita symbol. From this, it
follows that
\begin{equation}
  \label{eq:M-commutes-H}
\left[ M _ {i} , H \right] = 0 \ ,
\end{equation}
and therefore that eigenstates of the $ M _ {i} $ operators are
eigenstates of the Hamiltonian, and further, that acting on the states
$ \left\vert n \right\rangle $ that we constructed earlier with the
$ M _ {i} $ lead to degenerate states.

Let's try and understand this a little better. A straightforward
computation reveals that the $ M _ {i}  $ operators satisfy the
following commutation relation
\begin{equation}
\left[ M _ {i} , M _ {j}  \right] = -i \epsilon _ {ij} e B \ ,
\end{equation}
so it is clear that the $ M _ {i} $ cannot be simultaneously
diagonalised. (Note also, in passing, that the $ M _ {i} $ are
momentum-like variables.) Analogous to what we did with the
$ \Pi _ {i} $ operators, we can construct the operators
\begin{equation}
b = \frac{1}{\sqrt{2eB} } \left( M _ {1} - i M _ {2}  \right) \quad \text{and} \quad b ^ {\dagger } = \frac{1}{\sqrt{2eB} } \left( M _ {1} + i M _ {2}  \right) \ ,
\end{equation}
such that
\begin{equation}
\left[ b, b ^ {\dagger }  \right] = 1 \ .
\end{equation}
Further, it follows from \eqref{eq:M-commutes-H} that
\begin{equation}
\left[ b, H \right] = 0 \ .
\end{equation}
It follows from this that the ground state of the system in question
is not specified solely by $ a \left\vert 0 \right\rangle = 0 $, but
also by $ b \left\vert 0 \right\rangle = 0 $. We may then construct
excited states of the form
\begin{equation}
\left\vert n,k \right\rangle = \frac{1}{\sqrt{n! k!} } \left( a ^ {\dagger }  \right)^ {n} \left( b ^ {\dagger }  \right)^ {k} \left\vert 0 \right\rangle \ ,
\end{equation}
and for all $ k \in \mathbb{N} $, the eigenstates of the Hamiltonian
in \eqref{eq:landau-problem-hamiltonian} are
\begin{equation}
H \left\vert n,k \right\rangle = \frac{eB}{m} \left( n+\frac{1}{2}  \right)\left\vert n,k \right\rangle \ .
\end{equation}
Each eigenstate has an infinite degeneracy! In particular, when
projecting onto the lowest Landau level (with $ n=0 $), the
Hamiltonian is simply
\begin{equation}
 H \big\vert _ {\text{LLL}} = \frac{eB}{2m} \mathbf{1} \ ,
\end{equation}
i.e. proportional to the identity operator. 

It is natural to ask, at this stage, what this infinite degeneracy
corresponds to. It is helpful to recall that a charged particle in a
plane pierced by a magnetic field executes cyclotron motion. This does
not, however, specify the center about which the cyclotron motion
takes place --- that is determined by a constant of integration when
solving the classical equations of motion. The arbitrariness of the
center about which cyclotron motion is the executed is reflected in
the symmetry generated by the $ M _ {i} $ operators. (The fact that
the $ M _ {i} $ have dimensions of momentum is a minor itch we will
momentarily scratch.)

Indeed, the momentum $ p _ {i} $ of the quantum mechanical particle,
written in terms of the operators $ \Pi _ {i} $ and $ M _ {i} $ is
simply
\begin{equation}
p _ {i} = \frac{1}{2} \left( \Pi _ {i} + M _ {i}  \right) \ ,
\end{equation}
which may be interpreted as a a decomposition of the momentum into a
part governing cyclotron motion $ (\Pi _ {i} ) $ and a part governing
the center of motion $ (M _ {i} ) $. Analogously, the position
$ x _ {i} $ can also be broken up into parts associated to cyclotron
motion and the center of motion. Defining
\begin{equation}
R _ {i} = - \frac{1}{eB} \epsilon _ {ij} M _ {j} \ ,
\end{equation}
we see that the operator $ R _ {i} $, which controls the center of
motion and has dimensions of position, satisfies the commutation
relation
\begin{equation}
  \label{eq:R-commutation-relations}
\left[ R _ {i} , R _ {j}  \right] = - i \ell _ {\text{B}} ^ {2} \epsilon _ {ij} \ .
\end{equation}

We have already seen that the degeneracy of each Landau level is
infinite, but we can do a little better than that in characterising
the degeneracy. From the commutation relations in
\eqref{eq:R-commutation-relations}, we see that each center of
cyclotron motion occupies an area $ \ell _ {\text{B}} ^ {2} $. (In the
Landau problem, the quantity $ \ell _ {\text{B}} ^ {2} $ acts like
Planck's constant, except in real space.) Following the usual
heuristic that the number of states is the phase space area in units
of Planck's constant, we find that for the Landau problem the number
of degenerate states on a plane of area $ A $ is given by
\begin{equation}
  \label{eq:Landau-degeneracy}
N = \frac{A}{2 \pi \ell _ {\text{B}} ^ {2} } \ .
\end{equation}
This can be rephrased in two equivalent ways. The first is that the
degeneracy per unit area is constant, a proportional to $ eB/2 \pi
$. The second rewrites \eqref{eq:Landau-degeneracy} in terms of the
flux of the magnetic field through the surface $ \Phi = B A $ as
\begin{equation}
N \times \frac{2 \pi }{e} = \Phi \ ,
\end{equation}
and this suggests that the total flux $ \Phi  $ is quantised in
integer multiples of the quantum of magnetic flux:
\begin{equation}
\Phi _ {0} = \frac{2 \pi }{e} \ .
\end{equation}
