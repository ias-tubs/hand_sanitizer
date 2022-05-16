# Hand Sanitizers in the Wild: A Large-scale Study of Custom JavaScript Sanitizer Functions

  This repository contains the accompanying materials for the paper **Hand Sanitizers in the Wild: A Large-scale Study of Custom JavaScript Sanitizer Functions** by [David Klein](https://www.tu-braunschweig.de/en/ias/staff/david-klein), [Thomas Barber](https://www.linkedin.com/in/thomas-barber-b3965551/), Souphiane Bensalim, [Ben Stock](https://people.cispa.io/ben.stock/) and [Martin Johns](https://www.tu-braunschweig.de/en/ias/staff/martin-johns).

## Cite us!

```bibtex
@inproceedings{KleBarBen+22,
  author = {David Klein and Thomas Barber and Souphiane Bensalim and Ben Stock and Martin Johns},
  title = {Hand Sanitizers in the Wild: A Large-scale Study of Custom JavaScript Sanitizer Functions},
  booktitle = {Proc. of the IEEE European Symposium on Security and Privacy},
  year = {2022},
  month = jun,
}
```

## Get in touch

If you have any questions please do not hesitate to [contact us](mailto:david.klein@tu-braunschweig.de) :)

## Open Sourced Components

We are currently working on open sourcing additional components, pending intellectual property approval from the involved industrial partner, and will update this page accordingly.

### Taint Browser

The taint browser used throughout our study is open source on Github as [Project Foxhound](https://github.com/SAP/project-foxhound). We used [Version 80](https://github.com/SAP/project-foxhound/releases/tag/v80.0) for all our experiments.

### MONA

The changes we made to the MONA library are [available on Github](https://github.com/tmbrbr/MONA) as well.


## Materials

### Demonstrators for upcoming browser based Mitigations

As discussed in Section 5.2.4, two working drafts to combat XSS are currently in the works: Trusted Types and the Sanitizer API. We included a [sample website](samples/browser_based_mitigations) showcasing the protection offered by both.
