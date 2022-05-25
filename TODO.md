## TO-DO DRINk MACHINE

---

- ### MR-1:
  #### USER STORY
  - **AS A** salesman
  - **I WANT** to register and manage drinks
  - **SO THAT** make these drinks available for sale

  #### ACCEPTANCE CRITERIA

  - ##### AC-1 
    - **GIVEN** an undefined or null object
    - **WHEN** call create function
    - **THEN** throw an exception
  - ##### AC-2
    - **GIVEN** an undefined or null property
    - **WHEN** call create function
    - **THEN** throw an exception
  - ##### AC-3
    - **GIVEN** a drink with price less than 0
    - **WHEN** call create function
    - **THEN** throw an exception
  - ##### AC-4
    - **GIVEN** a drink with price greater than or equal to 0
    - **WHEN** call create function
    - **THEN** register a drink and return an identification

---

- ### MR-2:
  #### USER STORY
  - **AS A** customer
  - **I WANT** see drinks available
  - **SO THAT** can choice one and buy

  #### ACCEPTANCE CRITERIA
  - ##### AC-1
    - **GIVEN**
    - **WHEN** call find available drinks function
    - **THEN** see a list of available drinks

- ### MR-3:
  #### USER STORY
  - **AS A** customer
  - **I WANT** to buy a drink
  - **SO THAT** drink the drink

  #### ACCEPTANCE CRITERIA
  - ##### AC-1
    - **GIVEN** a drink of choice and payment
    - **WHEN** call buy function
    - **THEN** receive a drink and the fewest change coins as possible
