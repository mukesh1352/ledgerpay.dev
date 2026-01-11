# LedgerPay – Digital Wallet & Expense Ledger System

## Overview

LedgerPay is a **fintech-inspired backend system** that simulates the **internal wallet and ledger logic** used by modern financial platforms. It combines **banking-style transaction integrity** with **group-based expense splitting**, enabling users to track balances, settle dues, and analyze financial behavior in a secure and auditable manner.

The system focuses on **correctness, traceability, and trust**, rather than real payment processing.

---

## Problem Statement

Modern expense-sharing and personal finance applications allow users to create groups, add shared expenses, and settle balances. However, most of these systems prioritize convenience and visualization over **financial integrity and auditability**.

In many existing solutions:

* Transaction records can be edited or deleted without traceability
* Balance calculations lack verifiable correctness
* Dispute resolution is difficult due to missing audit trails
* Abnormal or risky financial behavior goes undetected

Additionally, while digital wallets and fintech platforms internally rely on **ledger-based accounting systems**, most student-level or consumer-facing applications do not model these principles correctly.

There is a need for a system that combines:

* **Group expense management**
* **Wallet-style transactions**
* **A strongly consistent, tamper-resistant ledger**
* **Intelligent financial analysis**

—all without accessing real bank accounts or processing actual payments.

---

## Proposed Solution

LedgerPay provides a **simulated digital wallet platform** where users maintain virtual accounts and all monetary activity is recorded as immutable ledger transactions. Group expenses, peer-to-peer transfers, and settlements are handled through the same ledger, ensuring consistency and correctness.

An AI-powered analytics layer monitors transaction patterns to detect anomalies, assess risk, and generate financial insights, while never interfering with core balance calculations.

---

## Key Novelty

* **Banking-Style Ledger Integrity**
  Transactions are append-only and hash-linked, ensuring tamper detection without blockchain.

* **Unified Wallet + Group Expense System**
  Wallet transactions and group splits operate on a single financial ledger.

* **Multiple Expense Split Strategies**
  Supports equal, exact, and percentage-based splits.

* **Balance Simplification Engine**
  Minimizes the number of settlements required between users.

* **AI-Based Financial Intelligence**
  Detects anomalous spending, delayed settlements, and risky financial behavior.

* **Audit-Ready Transaction History**
  All financial records are verifiable and traceable, similar to real fintech systems.

---

## Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Security (JWT-based authentication)
* Spring Data MongoDB

### Database

* MongoDB (event-based transaction storage)

### Frontend

* React (dashboard & monitoring)

### AI & Analytics

* Python (FastAPI)
* scikit-learn (anomaly detection & behavior analysis)

---

## Features & Implementation Plan

### Step 1: User & Wallet Management

* User registration and authentication
* Virtual wallet creation per user
* Wallet balance derived from ledger entries

### Step 2: Ledger-Based Transactions

* Credit (top-up) transactions
* Peer-to-peer transfers
* Immutable transaction recording

### Step 3: Group Expense Management

* Group creation and membership
* Expense addition with split types:

  * Equal
  * Exact
  * Percentage
* Automatic balance updates

### Step 4: Balance Simplification & Settlements

* Net balance calculation
* Settlement recommendations
* Settlement transaction recording

### Step 5: Audit & Integrity Verification

* Hash-chained ledger entries
* Integrity verification endpoint
* Read-only audit views

### Step 6: AI Financial Intelligence

* Anomaly detection in spending patterns
* Risk scoring for users and groups
* Insight generation for dashboards

### Step 7: Dashboard & Monitoring

* Wallet balance overview
* Group expense summaries
* AI alerts and insights

---

## Important Notes

* This system **does NOT process real money**
* No bank accounts, UPI, or payment gateways are integrated
* All balances are **virtual and simulated**
* The focus is on **ledger correctness and system design**

---

## Learning Outcomes

This project demonstrates:

* Real-world fintech backend architecture
* Ledger-based accounting principles
* Strong data consistency and auditability
* Secure API design with Spring Boot
* Practical use of AI in financial systems

---

## License

This project is for educational and portfolio purposes only.

---
