---
title: "Canonical Structures"
date: 2026-08-07 10:00:00 +0530
categories: 
  - Physics
excerpt: >
  Hamilton's equations, the Poisson brackets, 
  and canonical transformations.
---

The Euler-Lagrange equations [we derived
earlier](https://madhusudhanraman.github.io/physics/action-principle/)
are equivalent to to a system of first-order equations known as
Hamilton's equations, which we will now derive. Using the definition
of the canonical momentum,
one begins by defining the Hamiltonian function
\begin{equation}
  \label{eq:hamiltonian}
H = p ^{a} \dot{q} _ {a} - L(q _ {a}, \dot{q} _ {a}) \ .
\end{equation}
We have in the above expression a term with repeated indices; such
terms are to be understood as follows:
\begin{equation}
p ^{a} \dot{q} _ {a} \equiv \sum_ {a=1}^{N} p ^{a} \dot{q} _ {a} \ .
\end{equation}
In general, unless explicitly mentioned otherwise, all repeated
indices --- one raised and one lowered --- in an expression imply a
sum over the range of values the index may take. This is called the
Einstein summation convention and will be employed throughout these
lectures. 

It is instructive to consider the total derivative of the Hamiltonian:

$$
\begin{align}
  \mathrm{d} H &= \dot{q} _ {a} \mathrm{d} p ^{a} + p ^{a} \mathrm{d}
  \dot{q} _ {a} - \mathrm{d} L(q _ {a},\dot{q} _ {a}) \ , \\
  \label{eq:d-hamiltonian}
  &= - \frac{\partial L}{\partial q _ {a}} \mathrm{d} q _ {a} + \dot{q} _ {a} \mathrm{d} p ^{a}  \ .
\end{align}
$$

In going from the first line to the second, we have used the
definition of the canonical momentum. We can conclude, then, that the
Hamiltonian is only a function of generalised coordinates and momenta,
i.e. it is a function on phase space. We could, then, just as well
write
\begin{equation}
  \label{eq:d-hamiltonian-2}
\mathrm{d} H (q _ {a}, p ^{a}) = \frac{\partial H}{\partial q _ {a}} \mathrm{d} q _ {a} + \frac{\partial H}{\partial p ^{a}} \mathrm{d} p ^{a} \ ,
\end{equation}
and on comparing the coefficients of $ \mathrm{d} p ^{a} $ and
$ \mathrm{d} q _ {a} $ in \eqref{eq:d-hamiltonian} and \eqref{eq:d-hamiltonian-2}
and using the Euler-Lagrange equations, we arrive at:
\begin{equation}
  \label{eq:hamilton}
\dot{q} _ {a} = \frac{\partial H}{\partial p ^{a}} \quad \mathrm{and} \quad \dot{p} ^{a} = - \frac{\partial H}{\partial q _ {a}} \ .
\end{equation}
Together, \eqref{eq:hamilton} are called Hamilton's equations, a sent
of $ 2N $ first-order differential equations that are completely
equivalent to the Euler-Lagrange equations, and therefore Newton's
laws of motion.

They may be derived using a phase-space version of the principle of
least action; defining the action associated to a trajectory
$ (q _ {a}(t), p ^{a}(t)) $ in phase space as
\begin{equation}
  \label{eq:phase-space-action}
S[q _ {a}(t), p ^{a} (t)] = \int _ {t _ {i}} ^{t _ {f}} \mathrm{d}^{}t \, \left[ p ^{a}  \dot{q}  _ {a} - H(q _ {a}, p ^{a}) \right] \ ,
\end{equation}
as is easily verified.

## Poisson Brackets
There exists a particularly elegant formulation of Hamilton's
equations due to Poisson. For any two functions $ A $ and $ B $ on
phase space, their Poisson bracket is defined as
\begin{equation}
  \label{eq:poisson-bracket-def}
\left\lbrace A,B \right\rbrace = \frac{\partial A}{\partial q _ {a}} \frac{\partial B}{\partial p ^{a}} - \frac{\partial A}{\partial p ^{a}} \frac{\partial B}{\partial q _ {a}} \ .
\end{equation}
In terms of this bracket, Hamilton's equations can be written as
\begin{equation}
\dot{q} _ {a} = \left\lbrace q _ {a}, H \right\rbrace \quad \mathrm{and} \quad \dot{p} ^{a} = \left\lbrace p ^{a}, H \right\rbrace \ .
\end{equation}

Indeed, for any function $ f\left[q _ {a}(t), p ^{a}(t), t\right]$ on phase space,
we can write its time derivative in terms of the Poisson bracket as

$$
\begin{align}
  \frac{\mathrm{d} f}{\mathrm{d} t} &= \frac{\partial f}{\partial t} + \frac{\partial f}{\partial q _ {a}} \dot{q} _ {a} + \frac{\partial f}{\partial p ^{a}} \dot{p} ^{a} \ , \\
  &= \frac{\partial f}{\partial t} + \frac{\partial f}{\partial q _ {a}} \frac{\partial H}{\partial p ^{a}} - \frac{\partial f}{\partial p ^{a}} \frac{\partial H}{\partial q _ {a}}  \ , \\
  &= \frac{\partial f}{\partial t} + \left\lbrace f,H \right\rbrace \ .
\end{align}
$$

It follows, then, that any function that depends on time only
implicitly through the phase space coordinates and that "Poisson
commutes"" with the Hamiltonian --- i.e. satisfies $ \left\lbrace f,
  H \right\rbrace = 0 $ --- is a constant of motion.

The Poisson brackets have two properties that follow from
\eqref{eq:poisson-bracket-def} and are of particular note. The first is
antisymmetry:
\begin{equation}
  \label{eq:pb-antisymmetry}
\left\lbrace A, B \right\rbrace = - \left\lbrace B, A \right\rbrace \ .
\end{equation}
The second is the Jacobi identity:
\begin{equation}
  \label{eq:pb-jacobi}
\left\lbrace A, \left\lbrace B, C \right\rbrace \right\rbrace + \left\lbrace B, \left\lbrace C, A \right\rbrace \right\rbrace + \left\lbrace C, \left\lbrace A, B \right\rbrace \right\rbrace = 0 \ .
\end{equation}

It is useful to note that the only non-trivial Poisson brackets of the
canonical (or phase space) variables is
\begin{equation}
  \label{eq:fundamental-Poisson-brackets}
  \left\lbrace q _ {a}, p ^{b} \right\rbrace = \delta _ {a} {}^{b} \ .
\end{equation}

## Canonical Transformations
A transformation $ \left( q _ {a}, p ^{a} \right) \rightarrow \left( Q
  _ {a}, P ^{a} \right) $ is said to be canonical if there exists a new
Hamiltonian $ H' $ such that the structure of Hamilton's equations is
unchanged, i.e. that
\begin{equation}
\dot{Q} _ {a} = \frac{\partial H'}{\partial P ^{a}} \quad \mathrm{and} \quad \dot{P} ^{a} = - \frac{\partial H'}{\partial Q _ {a}} \ .
\end{equation}
Since we have already established the action principle from which
Hamilton's equations arise, it follows that for a transformation to be
canonical, the old and new actions in \eqref{eq:phase-space-action}
differ by a total derivative, or
\begin{equation}
  \label{eq:canonical-transformation-def}
p ^{a} \dot{q} _ {a} - H = P ^{a} \dot{Q} _ {a} - H' + \frac{\mathrm{d} G}{\mathrm{d} t} \ .
\end{equation}
The function $ G $ is called the generating function of the canonical
transformation, and may be chosen to be a function of both the old and
new phase space variables. For example, the choice
$ G = P ^{a} \left( q _ {a} -Q _ {a} \right) $ is easily seen to be the
identity transformation.

Consider now canonical transformations that differ infinitesimally
from the identity transformation, i.e.
\begin{equation}
G = P ^{a} \left( q _ {a} - Q _ {a} \right) + \epsilon F \left( q _ {a}, p ^{a} \right) + \mathcal{O}\left( \epsilon ^{2} \right) \ .
\end{equation}
The function $ F $ is called a generator of a canonical
transformation. Using \eqref{eq:canonical-transformation-def}, we find
\begin{equation}
\delta q _ {a} = \epsilon \left\lbrace q _ {a}, F \right\rbrace \quad \mathrm{and} \quad \delta p ^{a} = \epsilon \left\lbrace p ^{a}, F \right\rbrace \ .
\end{equation}
Time evolution, generated by the Hamiltonian thusly, is a canonical
transformation. More generally, any constant of motion is a generator
of a symmetry of the Hamiltonian.
