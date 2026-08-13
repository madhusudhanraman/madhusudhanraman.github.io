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
corresponding to a magnetic field in the Landau gauge:
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
Levi-Civita symbol.[^1] Our
conventions completely specified by $ \epsilon _ {12} = +1 $. Consider
the following operators constructed out of the $ \Pi _ {i} $:
\begin{equation}
a = \frac{1}{\sqrt{2 e B} } \left( \Pi _ {1} + i \Pi _ {2}  \right) \quad \text{and} \quad a ^ {\dagger } = \frac{1}{\sqrt{2eB} } \left( \Pi _ {1} - i \Pi _ {2}  \right) \ ,
\end{equation}
which satisfy the familar commutation relations
\begin{equation}
\left[ a, a ^ {\dagger }  \right] = 1 \ ,
\end{equation}
and so the Hamiltonian in \cref{eq:landau-problem-hamiltonian} is
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
\left[ M _ {i} , H \right] = 0 \ ,
\end{equation}
and therefore that eigenstates of the $ M _ {i}  $ operators are
eigenstates of the Hamiltonian, and further, that acting on the states
$ \left\vert n \right\rangle  $ that we constructed earlier with the $
M _ {i}  $ lead to degenerate states.

How big is this degeneracy? It is a useful exercise to estimate this
in the semiclassical limit, where the Bohr-Sommerfeld picture tells us
that we should think of phase space as as broken up into tiny
"quantum" cells whose dimensions are controlled by Planck's
constant. The number of degenerate states $ N $ is then the volume of the
degenerate phase space measured in units of Planck's constant.

The degeneracy is controlled by the operators $ M _ {i} $, so we are
interested only in the semiclassical estimate of the phase space
volume spanned by these directions. Then
\begin{equation}
N \propto \frac{1}{2 \pi } \, \text{d} M _ {1} \, \text{d} M _ {2} \ ,
\end{equation}
Let's consider the LLL and ignore zero-point fluctuations. Minimising
the Hamiltonian tells us $ \Pi _ {i} \sim 0 $, which in turn means $ p
_ {i} \sim e A _ {i} $, so
\begin{equation}
M _ {i} \sim 2 e A _ {i} = - e B \epsilon _ {ij} x _ {j} \ .
\end{equation}
Thus
\begin{equation}
N \propto  \frac{eB}{2 \pi } \, \text{d} x _ {1}  \, \text{d} x _ {2} \ ,
\end{equation}
or, more properly, the degeneracy per unit area is $ e B/2 \pi $.

[^1]: It is useful, incidentally, to write $ A _ {i} = -\frac{B}{2}
\epsilon _ {ij} x _ {j} $ sometimes.
