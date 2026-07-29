---
title: "The Action Principle"
date: 2026-07-28
excerpt: >
  The principle of least action and the Euler-Lagrange equations 
  of motion.
---

Consider a finitary, conservative dynamical system, i.e. one with a
finite number of degrees of freedom, and in the absence of any
dissipative effects. A fundamental question in classical dynamics is:
given such a system in some initial configuration, how does it evolve
in time?

The answer to this question is supplied by Newton's laws. In
particular, Newton's second law of motion gives us a second-order
differential equation that, given the configuration (i.e. a collection
of generalised positions and velocities) at some time $ t _{i} $, will
uniquely determine the configuration of the system at any future time
$ t _{f} $. This is a local or differential formulation of classical
dynamics: given the configuration of the system at an instant $ t $,
the differential equation tells us how to construct the configuration
of the system at an instant $ t + \delta t $, and so on. The path our
system will trace through configuration space is composed of
infinitesimal time steps, and the differential equation tells us how
each step must be taken. An equivalent global or integral
characterisation of this trajectory is provided by the action
principle, which we now discuss.

We will momentarily restrict our attention to a system with a single
degree of freedom. Say we are interested in the motion of this system
from a position $ q _{i} $ at time $ t _{i} $ to a position $ q _{f} $
at time $ t _{f} $. Newton's second law of motion, when integrated,
specifies a trajectory $ q _{c}(t) $ taken by the system. The
principle of least action answers the following question: of all the
possible trajectories $ q(t) $ the system could take, what makes
$ q _{c}(t) $ special?

This answer is constructed as follows. To every possible path $ q(t) $
connecting the points $ \left( q _{i}, t _{i} \right) $ and
$ \left( q _{f}, t _{f}\right) $ in configuration space, we associate
an action $ S[q(t)] $ defined as
\begin{equation}
  \label{eq:action-lagrangian-defn}
S[q(t)] = \int _{t _{i}} ^{t _{f}} \mathrm{d} t\, L(q,\dot{q} ) \ .
\end{equation}
The function $ L(q,\dot{q} ) $ is called the Lagrangian. We'll have
more to say about it shortly. Writing the action (a global quantity
associated to every trajectory connecting initial and final
configurations) as the integral of the Lagrangian (a local quantity
associated to each point in configuration space) is key to relating
the local/differential and global/integral formulations of classical
dynamics.

The action functional associates a number $ S[q(t)] $ to every
possible trajectory $ q(t) $ in configuration space such that
$ q(t _{i}) = q _{i} $ and $ q(t _{f}) = q _{f} $. The principle of
least action states that the trajectory $ q _{c}(t) $ extremises the
action:
\begin{equation}
\delta S[q _{c}(t)] = 0 \ .
\end{equation}
Writing the action $ S[q(t)] $ in terms of a Lagrangian
$ L(q, \dot{q} ) $ allows us to translate the principle of least
action --- global principle --- into a differential equation, i.e. a
local formulation of the same.

