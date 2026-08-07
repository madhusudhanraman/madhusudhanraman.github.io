---
title: "Is The Oscillator Formalism Complete?"
date: 2026-08-07 19:30:00 +0530
categories: 
  - Physics
excerpt: >
  Does the oscillator formalism for higher rank groups furnish
  all representations?
---

We have undoubtedly constructed, in an [earlier post](https://madhusudhanraman.github.io/physics/oscillator-formalism-higher-dim/),
unitary irreducible representations of $ \text{SU}(d) $, but we might
ask ourselves: are these all the unitary irreducible
representations of $ \text{SU}(d) $? That is, is the above
construction exhaustive?

To answer this question, it is helpful to quickly recall what
differentiates the Lie group $ \text{SU}(2) $ from
$ \text{SU}(d) $ for $ d \geq 3 $. Let us begin by observing that the
definition of $ \text{SU}(d) $ itself suggests a representation:
that of $ d $-dimensional complex column vector, which transforms
under the action of an element $ U \in \text{SU}(d) $ as
\begin{equation}
U : x ^{i} \mapsto U ^{i} {} _ {j} x ^{j} \ .
\end{equation}
Another representation is obtained by the corresponding row vectors:
\begin{equation}
  \label{eq:row-vector-transformation}
U : y _ {i} \mapsto y _ {j} \overline{U} ^{j} {} _ {i}  \ ,
\end{equation}
where the bar denotes complex conjugation. By unitarity
\begin{equation}
  \label{eq:unitarity}
\overline{U} ^{j} {} _ {i} U ^{i} {} _ {k} = \delta ^{j} {} _ {k} \ ,
\end{equation}
the singlet $ x _ {i}y ^{i} $ is invariant, since
\begin{equation}
U: x _ {i}y ^{i} \mapsto x _ {j} \cdot \overline{U} ^{j} {} _ {i}   U ^{i} {} _ {k} \cdot  y ^{k} = x _ {j} \cdot \delta ^{j} {} _ {k} \cdot y ^{k} = x _ {i} y ^{i} \ .
\end{equation}
Products of these primitive upper- and
lower-indexed objects clearly carry other representations of
$ \text{SU}(d) $, but they are not in general reducible, and one
must then construct invariant combinations that do not mix under the
action of elements of the unitary group, and discard those
combinations that can be obtained from tensors with smaller rank. Once
this is done, one is (ostensibly) left with new irreducible
representations.

Let's recall how this is done for the case of $ d=2 $. Define the
antisymmetric $ 2 $-tensor $ \epsilon _ {ij} $ such that
$ \epsilon _ {12} = 1 $. For any $ 2 \times 2 $ complex matrix
$ U $, it is a fact that
\begin{equation}
  \label{eq:epsilon-invariance-1}
U ^{i} {} _ {k} U ^{j} {} _ {\ell } \epsilon _ {ij} = \operatorname{det} U \times \epsilon _ {k \ell } \ .
\end{equation}
In our case, $ \operatorname{det} U = 1 $ since our
$ U \in \text{SU}(2) $. The form of the identity in
\eqref{eq:epsilon-invariance-1}, although true, is a little
unsatisfactory as objects with lower indices ought to transfer
analogously to \eqref{eq:row-vector-transformation}. Multiplying
\eqref{eq:epsilon-invariance-1} by $ \overline{U} ^{k} {} _ {m}
\overline{U} ^{\ell } {} _ {n}  $ and using \eqref{eq:unitarity},
we get
\begin{equation}
  \label{eq:epsilon-invariance-2}
  \epsilon _ {k \ell }\overline{U} ^{k} {} _ {m} \overline{U} ^{\ell } {} _ {n} = \epsilon _ {mn} \ ,
\end{equation}
which shows us that the $ \epsilon  $-tensor is an invariant tensor of
$ \text{SU}(2) $.

The nice thing about this antisymmetric tensor is that it can be used
to raise and lower indices: $ x _ {i} = \epsilon _ {ij} x ^{j} $. This
is quite special to $ \text{SU}(2) $, and is the statement that the
representations $ \mathbf{2} $ and $ \mathbf{\overline{2} } $
(viz. the fundamental and antifundamental) are isomorphic. More
generally, this means we can safely consider (say) tensors with lower
indices only.

Next, consider a tensor $ T _ {ij} $ that can be split into symmetric
and antisymmetric components $ T _ {[ij]} $ and $ T _ {(ij)} $, and note
that the antisymmetric part can be written as
$ T _ {ij} = \epsilon _ {ij} \phi $, which in turn expresses the
decomposition
$ \mathbf{2} \otimes \mathbf{2} = \mathbf{3} \oplus \mathbf{1} $ so in
this case only a symmetric tensor and a scalar remain. More generally,
for a tensor of arbitrary rank, this trick can be used repeatedly
\begin{equation}
T _ {\cdots [i| \cdots |j] \cdots } = \epsilon _ {ij} S _ {\cdots } \ ,
\end{equation}
to show that irreducible representations correspond to the set of
completely symmetric tensors. A rank-$ n $ tensor that is completely
symmetric would have dimension $ n+1 $, which is precisely what we
found via the Jordan-Schwinger construction.

Note, however, that for the case of $ \text{SU}(3) $, the invariant
tensor $ \epsilon _ {ijk} $ has three indices, and therefore cannot be
used to raise and lower indices, and so we must consider tensors with
both upper and lower indices of the form
$ T ^{i _ {1} \cdots i _ {n}} {} _ {j _ {1} \cdots j _ {m}}
$. However, we may yet express the antisymmetric parts of tensors in
terms of tensors of lower rank, just as we did for the case of
$ \text{SU}(2) $, as follows:
\begin{equation}
T ^{\cdots [i| \cdots |j] \cdots } {} _ {\cdots } = \epsilon ^{ijk} S ^{\cdots } {} _ {k \cdots }  \ .
\end{equation}
This teaches us that for the case of $ \text{SU}(3) $ we can
restrict ourselves to the study of tensors that are completely
symmetric in both upper and lower indices. Further, since traces of
such tensors are themselves representations, we need only consider
traceless representations, i.e. ones where every contraction of upper
and lower indices vanishes. The space of traceless symmetric tensors
with $ n $ upper and $ m $ lower indices will be denoted $ (n,m)
$.

What is the dimension of $ (n,m) $? The answer to this question
follows from the following observation: the trace map sends
\begin{equation}
\mathbf{3} ^{\odot n} \otimes \mathbf{\overline{3} } ^{\odot m} \rightarrow\mathbf{3} ^{\odot n-1} \otimes \mathbf{\overline{3} } ^{\odot m-1} \ ,
\end{equation}
where $ \left( \bullet \right) ^{\odot n} $ denotes the
$ n ^{\text{th}} $ symmetric tensor product of $ \bullet $. Further,
since the kernel of this map is precisely the irreducible
representation $ (n,m) $, it must be that

$$
\begin{align}
    \operatorname{dim}(n,m) &= \operatorname{dim}\left(\mathbf{3} ^{\odot n} \otimes \mathbf{\overline{3} } ^{\odot m}\right) - \operatorname{dim}\left(\mathbf{3} ^{\odot n-1} \otimes \mathbf{\overline{3} } ^{\odot m-1}\right) \ , \\
    &= \binom{n+2}{2} \binom{m+2}{2} - \binom{n+1}{2} \binom{n+1}{2} \ , \\
    &= \frac{1}{2} \left( n+1 \right) \left( m+1 \right) \left( n+m+2 \right) \ . \label{eq:oscillator-su3-dimension}
\end{align}
$$

The second line follows from a simple exercise in
combinatorics. On comparing the dimension
formula above with \eqref{eq:oscillator-su3-dimension}, we see that the
oscillator formalism in the previous section only constructed the
representations $ \left( N,0 \right) $.

We conclude from this discussion that the oscillator formalism only
constructs symmetric representations. For the case of
$ \text{SU}(2) $, this exhausts all representations, but for
$ \text{SU}(d) $ with $ d \geq 3 $, there are representations that
our construction has yet to reproduce. Concretely, for the case of
$ \text{SU}(3) $ we do not yet know how to construct representations
of the form $ (n,m) $ for $ m \neq 0 $. It is natural, then, to ask if
some modification of our construction can generate these missing
representations.
