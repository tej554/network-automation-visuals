# 🧠 5. “Two Worlds” Diagram — Manual vs Automated

Perfect for before/after posts.

### **Mermaid:**

```mermaid
flowchart LR
    A[Manual Networking]
    A --> X1[CLI Based]
    A --> X2[Repetitive Tasks]
    A --> X3[Human Errors]

    B[Automated Networking]
    B --> Y1[Templates]
    B --> Y2[APIs & Python]
    B --> Y3[CI/CD Pipelines]

    A --- B

    classDef default fill:#fff,stroke:#333,stroke-width:1px,rx:5,ry:5;
    classDef manual fill:#fce4ec,stroke:#c2185b,stroke-width:2px;
    classDef auto fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef root fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;

    class X1,X2,X3 manual;
    class Y1,Y2,Y3 auto;
    class A,B root;
```
