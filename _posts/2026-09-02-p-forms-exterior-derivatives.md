---
title: "Higher-Degree Forms and Exterior Derivatives"
date: 2026-09-02 15:00:00 +0530
categories: 
  - Physics
excerpt: >
  Forms of higher degree and the exterior derivative.
---

Here we discuss how to construct forms of higher degree.

## Higher-Degree Forms

We may generalise the notion of a $ 1 $-form as follows: just as a
$ 1 $-form "eats" a vector and spits out a scalar, a $p$-form
$\alpha$ eats a collection of $p$ tangent vectors and returns a
number:
\begin{equation}
\alpha(X _ {1},\cdots,X _ {p})\in\mathbb{R} \ .
\end{equation}
This map is linear in every argument and antisymmetric under the
exchange of arguments:
\begin{equation}
\alpha(\cdots,X _ {i},\cdots,X _ {j},\cdots)
=-\alpha(\cdots,X _ {j},\cdots,X _ {i},\cdots) \ .
\end{equation}
It follows immediately that a form vanishes whenever two of its
arguments coincide. The space of smooth $p$-forms on $M$ is denoted
$\Omega^{p}(M)$. Functions may be regarded as $ 0 $-forms, so that
$\Omega^{0}(M)$ is simply the space of smooth functions on $M$.

In a coordinate basis, a $p$-form can be written as
\begin{equation}
\alpha=\frac{1}{p!}\alpha _ {\mathsf{a} _ {1}\cdots\mathsf{a} _ {p}}
\,\mathrm{d}y^{\mathsf{a} _ {1}}\wedge\cdots\wedge
\mathrm{d}y^{\mathsf{a} _ {p}} \ ,
\label{eq:p-form-components}
\end{equation}
where the components
$\alpha _ {\mathsf{a} _ {1}\cdots\mathsf{a} _ {p}}$ are completely
antisymmetric. The symbol $\wedge$ denotes the exterior or wedge
product. For a $p$-form $\alpha$ and a $q$-form $\beta$, their
wedge product is a $(p+q)$-form that satisfies a graded version of commutativity:
\begin{equation}
\alpha\wedge\beta=(-1)^{pq}\beta\wedge\alpha \ .
\label{eq:graded-commutativity}
\end{equation}

For example,
$\mathrm{d}y^{\mathsf{a}}\wedge\mathrm{d}y^{\mathsf{b}}=-\mathrm{d}y^{\mathsf{b}}\wedge\mathrm{d}y^{\mathsf{a}}$,
and consequently
$\mathrm{d}y^{\mathsf{a}}\wedge\mathrm{d}y^{\mathsf{a}}=0$. More
generally, forms of odd degree anticommute, forms of even degree
commute, and forms of odd and even degree commute with each
other. This should be reminiscent of bosonic and fermionic operators
and is not a coincidence! Perhaps we will develop this correspondence
later in this series of notes. 

For two one-forms $\alpha$ and $\beta$, the definition of the wedge
product is equivelant to:
\begin{equation}
(\alpha\wedge\beta)(X,Y)
=\alpha(X)\beta(Y)-\alpha(Y)\beta(X) \ ,
\end{equation}
and the definition for forms of higher degree is the corresponding
completely antisymmetrised product on the right-hand side. On an
$n$-dimensional manifold, it follows from the definition that there
are no forms of degree greater than $n$.

Under a change of coordinates, the components of a $p$-form transform
as
\begin{equation}
\alpha' _ {\mathsf{a} _ {1}\cdots\mathsf{a} _ {p}}
=\frac{\partial y^{\mathsf{b} _ {1}}}{\partial y'^{\mathsf{a} _ {1}}}
\cdots
\frac{\partial y^{\mathsf{b} _ {p}}}{\partial y'^{\mathsf{a} _ {p}}}
\alpha _ {\mathsf{b} _ {1}\cdots\mathsf{b} _ {p}} \ .
\end{equation}
Thus, the components of a differential form make up a completely
antisymmetric tensor field. Depending on the context, we will
sometimes find it more convenient to discuss a form in terms of its
components. The component expression in \eqref{eq:p-form-components}
is often more useful for calculations, but it can occasionally obscure
the underlying geometric structures. The index-free notation often
offers structural clarity. For example, if
\begin{equation}
\alpha=\frac{1}{2}\alpha _ {\mathsf{ab}}\,
\mathrm{d}y^{\mathsf{a}}\wedge\mathrm{d}y^{\mathsf{b}} \ ,
\end{equation}
then
\begin{equation}
\alpha(X,Y)=\alpha _ {\mathsf{ab}}X^{\mathsf{a}}Y^{\mathsf{b}} \ .
\end{equation}
The two descriptions contain precisely the same information. We will
move freely between them, using indices when they make a calculation
transparent and suppressing them when the geometric structure is
clearer without them.

The pullback introduced in \eqref{eq:pullback-one-form} extends to forms
of arbitrary degree. If $\alpha\in\Omega^{p}(N)$, then
\begin{equation}
(\Phi^{\star}\alpha)(X _ {1},\cdots,X _ {p})
=\alpha(\Phi _ {\star}X _ {1},\cdots,\Phi _ {\star}X _ {p}) \ .
\label{eq:pullback-p-form}
\end{equation}
Additionally, pullbacks act as a homomorphism on wedge products:
\begin{equation}
\Phi^{\star}(\alpha\wedge\beta)
=\Phi^{\star}\alpha\wedge\Phi^{\star}\beta \ .
\label{eq:pullback-wedge}
\end{equation}
This identity will, later, ensure that preserving the symplectic form
also preserves the volume form constructed from it.


## Exterior Derivatives

In an earlier section, we saw that the differential $ \text{d}f $ of a
function $ f $ is a $ 1 $-form, and that $ f $ can be thought of as a
$ 0 $-form, i.e. a smooth function on the manifold. It is natural to
ask, then: does this generalise to forms of higher degree? We define
the exterior derivative $ \text{d} $ that sends
$ p $-forms to $ (p+1) $-forms:
\begin{equation}
\mathrm{d}:\Omega^{p}(M)\longrightarrow\Omega^{p+1}(M) \ ,
\end{equation}
If $\alpha$ is the $p$-form in \eqref{eq:p-form-components}, then
\begin{equation}
\mathrm{d}\alpha
=\frac{1}{p!}\partial _ {\mathsf{b}}
\alpha _ {\mathsf{a} _ {1}\cdots\mathsf{a} _ {p}}
\,\mathrm{d}y^{\mathsf{b}}\wedge
\mathrm{d}y^{\mathsf{a} _ {1}}\wedge\cdots\wedge
\mathrm{d}y^{\mathsf{a} _ {p}} \ .
\label{eq:exterior-derivative-components}
\end{equation}

This exterior derivative is nilpotent:
\begin{equation}
\mathrm{d}^{2}=0 \ .
\label{eq:d-squared-zero}
\end{equation}
Additionally, it obeys a graded Leibniz rule. If $\alpha\in\Omega^{p}(M)$,
then
\begin{equation}
\mathrm{d}(\alpha\wedge\beta)
=\mathrm{d}\alpha\wedge\beta
+(-1)^{p}\alpha\wedge\mathrm{d}\beta \ .
\label{eq:d-leibniz}
\end{equation}
It helps to think of the exterior derivative as "jumping over" forms
when writing down the Liebniz rule. Whenever you jump over an
odd-degree form, you pick up a sign, and when you jump over an
even-degree form, you don't pick up a sign. 

A form $\alpha$ satisfying $\mathrm{d}\alpha=0$ is called closed,
while one that can be written as $\alpha=\mathrm{d}\beta$ is called
exact. Equation \eqref{eq:d-squared-zero} tells us that every exact form
is closed. The converse is always true locally, but need not be true
globally. This kind of obstruction is typically a signal of some
non-trivial topology on $ M $.

Despite the appearance of partial derivatives in
\eqref{eq:exterior-derivative-components}, this definition is
independent of coordinates. One way to see this is to observe how this
definition interacts with the pullback. We find:
\begin{equation}
\Phi^{\star}(\mathrm{d}\alpha)
=\mathrm{d}(\Phi^{\star}\alpha) \ .
\label{eq:pullback-exterior-derivative}
\end{equation}
Therefore, a form that is closed or exact in one system of
coordinates, remains so in every other.
