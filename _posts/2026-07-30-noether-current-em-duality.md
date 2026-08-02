---
title: "The Noether Current for Electric-Magnetic Duality"
date: 2026-07-30
categories: 
  - Physics
excerpt: >
  Deriving the Noether current for electric-magnetic duality rotations.
---

I will briefly review, in covariant notation, a result from the
following paper:

_Duality Transformations of Abelian and Nonabelian Gauge Fields_\
S. Deser and C. Teitelboim\
[Phys. Rev. D **13** (1976),
1592-1597](https://doi.org/10.1103/PhysRevD.13.1592).


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

Let's work out an example: the Noether current corresponding to
electric-magnetic duality rotations in source-free
electromagnetism. Recall that Maxwell's equations in this case
take the form
\begin{equation}
\text{d} \star F = 0 \quad \text{and} \quad \text{d} F = 0 \ ,
\end{equation}
and that electric-magnetic duality rotates these two equations into
each other:
\begin{equation}
\delta F = \star F  \quad \text{and} \quad  \delta \star F = -F \ .
\end{equation}
Bianchi's identity $ \text{d} F = 0 $ implies there exists some
$ F = \text{d} A $. It is therefore natural to ask: how do
electric-magnetic duality rotations act on $ A $?

The answer here is complicated by the following fact: let's say there
were a $ \delta A $ such that
$ \text{d} \left( \delta A \right) = \star F $. Then, by acting on
both sides of this equation with an exterior derivative, we'd find
\begin{equation}
\text{d} ^ {2} \left( \delta A \right) = 0 = \text{d} \star F \ .
\end{equation}
Note that the first equality is identically true, whereas the second
is only true on-shell. For this reason, it is necessary to extend
electric-magnetic duality rotations off-shell in an appropriate
manner. This is done by considering a more general transformation
\begin{equation}
\delta A = Z \quad \text{such that} \quad \text{d} Z = \star F + G \ ,
\end{equation}
where $ G $ is zero on-shell. In particular, $ \delta F = \text{d} Z
$, a fact we'll use shortly. 

Free Maxwell theory is governed by the action
\begin{equation}
S = \int _ {\text{M}} ^ {} -\frac{1}{2} F \wedge \star F \ ,
\end{equation}
an arbitrary variation of which yields
\begin{equation}
\delta S = \int _ {\text{M}} ^ {} -  \delta A \wedge \text{d} \star F - \text{d} \left( \delta A \wedge \star F \right)  \ .
\end{equation}
Since we're interested in the Noether current, we can safely ignore
the equation of motion term. Plugging in the appropriately
off-shell-extended $ \delta A $ for electric-magnetic duality
rotations yields
\begin{equation}
\delta S = \int _ {\text{M}} ^ {} - \text{d} Z \wedge \star F \ ,
\end{equation}
which we can write as
\begin{equation}
\delta S = \int _ {\text{M}} ^ {} - Z \wedge \text{d} \star F - \text{d} \left( Z \wedge \star F \right) \ .
\end{equation}
This allows us to identify $ H _ {\text{D}} = -Z \wedge \star F $.

We now use the following algebraic fact:
\begin{equation}
-\text{d} Z \wedge \star F = \frac{1}{2} G \wedge G + \frac{1}{2} \text{d} \left[ A \wedge F - Z \wedge \text{d} Z \right] \ .
\end{equation}
Assuming that $ G \wedge G = 0 $, we read off
\begin{equation}
\Theta _ {\text{D}} = \frac{1}{2} \left[ A \wedge F - Z \wedge \text{d} Z \right] \ ,
\end{equation}
and so the duality current $ J _ {\text{D}} = \Theta _ {\text{D}} - H _ {\text{D}}  $ is
\begin{equation}
J _ {\text{D}} = \frac{1}{2} \left[ A \wedge F + 2 Z \wedge \star F - Z \wedge \text{d} Z \right] \ ,
\end{equation}
and $ \text{d} J _ {\text{D}} = 0 $. Using the relation $ \text{d} Z =
\star F + G $, we can also write this as
\begin{equation}
J _ {\text{D}} = \frac{1}{2} \left[ A \wedge F + Z \wedge \star F - Z \wedge G \right] \ .
\end{equation}
so it is clear that on-shell (when $ G = 0 $) the current is simply
\begin{equation}
J _ {\text{D}} \Big\vert _ {\text{on-shell}}  = \frac{1}{2} \left[ A \wedge F + Z \wedge \star F \right] \ .
\end{equation}

To the best of my knowledge, the corresponding charge was first
computed in:

_An Invariance Property of the Free Electromagnetic Field_\
M. G. Calkin\
[Am. J. Phys. **33** (1965)
958–960](https://doi.org/10.1119/1.1971089).

This charge is proportional to the difference in the
number of left- and right-circularly polarised photons. 
