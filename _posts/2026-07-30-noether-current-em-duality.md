---
title: "The Noether Current for Electric-Magnetic Duality"
date: 2026-07-30
excerpt: >
  Deriving the conserved current for electric-magnetic duality rotations.
---

I'll briefly review, in covariant notation, some results from the
following paper:

_Duality Transformations of Abelian and Nonabelian Gauge Fields_\
S. Deser and C. Teitelboim\
Phys. Rev. D **13** (1976), 1592-1597.

## Noether Currents

Consider an action governing the dynamics of some set of fields
$ \phi ^ {a} $ of the form:
\begin{equation}
S = \int _ {\text{M}} ^ {}  \mathcal{L}\left( \phi ^{a}, \partial \phi
^ {a} \right) \ .
\end{equation}
An arbitrary variation of this action will be of the form
\begin{equation}
\delta S = \int _ {\text{M}} ^ {} E _{a} \delta \phi ^{a} + \text{d}\Theta \ ,
\end{equation}
where $ E _ {a} $ are the equations of motion governing the field
$ \phi ^ {a} $ and $ \Theta $ is the symplectic potential. For a
symmetry transformation, the Lagrangian can at most change by a total
derivative, so:
\begin{equation}
\delta S = \int _ {\text{M}} ^ {} \text{d} H \ .
\end{equation}
On equating the above two and working on-shell, i.e. where
$ E _ {a} = 0 $, we find that the Noether current $ J = \Theta - H $
is conserved, i.e. $ \text{d} J = 0 $.

A small comment on the degree of the forms above: $ J $, $ \Theta $
and $ H $ are all $ (d-1) $-forms. One can also consider their Hodge
duals (each denoted by the corresponding lowercase symbols) in which
case the Noether current would be the $ 1 $-form $ j = \theta - h $
and the conservation law would look like $ \text{d} \star j = 0 $.

## Duality Rotations

Let us apply this to the case of electric-magnetic duality rotations...
