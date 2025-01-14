# Subgroup Proof

### Problem

Show that a nonempty subset \( H \) of a group \( G \) is a subgroup of \( G \) if and only if \( a, b \in H \) implies \( ab^{-1} \in H \).

---

### Proof

We assume \( a, b \in H \) implies \( ab^{-1} \in H \) is true, and we want to show that \( H \) is a subgroup of \( G \). To do this, we need to show that:
1. \( a \in H \implies a^{-1} \in H \),
2. \( a, b \in H \implies ab \in H \).

#### Proof for (1): \( a \in H \implies a^{-1} \in H \)

Let \( a \in H \). By our assumption, for \( b = a \), we get:

\[
aa^{-1} = e,
\]

where \( e \) is the identity element of \( G \). So, we know that the identity element \( e \) is in \( H \). Now, since \( e, a \in H \), again using the assumption, we get:

\[
ea^{-1} = a^{-1}.
\]

Thus, we have shown that \( a \in H \implies a^{-1} \in H \), and the proof for (1) is complete.

#### Proof for (2): \( a, b \in H \implies ab \in H \)

Let \( a, b \in H \). By (1), we know that \( b \in H \implies b^{-1} \in H \). Now, since \( a, b^{-1} \in H \), by the starting assumption, we get:

\[
a(b^{-1})^{-1} = ab.
\]

Thus, we have shown that \( a, b \in H \implies ab \in H \), and the proof for (2) is complete.

---

Since (1) and (2) are true, \( H \) is indeed a subgroup of \( G \), and the statement is proven.
