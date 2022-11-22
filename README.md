# Voting dapp based on React Truffle Box

## Expected links :

Demo video :
https://www.youtube.com/watch?v=LQsl5bQPWz0&ab_channel=Omarock



### Security

> First, I changed the file so that the tallydraw routines no longer contained a loop.
> These loops constituted a compromise of the Gas Dos limit type's security. In order to prevent some functions from being called too early in the process, I also added some requirements to them.

### Documentation

I've been able to generate a documentation directly from Remix to review the comliance of the format. This documentation can be checked here :


## Front end 

> REACT Truffle box.


#### Use case expressed in the statmeent of work

- l’enregistrement d’une liste blanche d'électeurs.
- à l'administrateur de commencer la session d'enregistrement de la proposition.
- aux électeurs inscrits d’enregistrer leurs propositions.
- à l'administrateur de mettre fin à la session d'enregistrement des propositions.
- à l'administrateur de commencer la session de vote.
- aux électeurs inscrits de voter pour leurs propositions préférées.
- à l'administrateur de mettre fin à la session de vote.
- à l'administrateur de comptabiliser les votes.
- à tout le monde de consulter le résultat.

**All this fucntionnalities have been implemented.**

---

### Event listeners

Use of hook on events is one of the aspects that has not been fully addressed. Currently, reloading pages works well, but hooks do not update rendering. The hooks defined (and commented in the current version of the dapp) are triggered as intended, I discovered after some testing. The renderer update that does not function as planned is this one. My best guess at this point is to look into how my state's variables are declared. In fact, it is intended to be stated in this manner with the most recent version of the truffle react box:

- Event :
  - [x] VoterRegistered
  - [x] WorkflowStatusChange
  - [x] Voted

---
