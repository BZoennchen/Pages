---
layout: post
title: "From Intelligence to Autopoiesis"
tags: 
    - Social Systems Theory
    - AI
comments: true
---

+ https://wiki.kinaesthetics.de/wiki/Maschinen_(triviale_und_nichttriviale)

In diesem Artikel beschreibe ich die Gedanken aus unserer Veröffentlichung {% cite zoennchen:2025 %} sowie die darauf gefolgte Antwort von {% cite watson:2025b %}.
Vorweggenommen handelt es sich bei den beiden Arbeiten nicht um direkte Wiedersprüche sondern um unterschiedliche Perspektiven.
Oder systemisch gesagt, wird eine andere *Unterscheidung* getroffen.

## Motivation

Die Motivation hinter unserer Veröffentlichung besteht in der Schwierigkeit technologische Artefakte, die durch den Forschungsbereich *Künstliche Intelligenz* ermöglicht wurden, zu beschreiben. Obwohl die neuen Maschinen im Prinzip noch immer nach dem Input-Output-Prinzip funktionieren, scheint sich etwas verändert zu haben und es fällt uns schwer dieses etwas in unserer Sprache auszudrücken.
Als Aufhänger motivieren natürlich die großen Sprachmodelle, die sowohl Laien als auch Experten überrascht haben und noch weiter überraschen.

### Was bleibt übrig vom Sinn des Denkens?

Beispielhaft kann man einen der gerade bekanntesten deutschen Philosophen unserer Zeit, Markus Gabriel, nennen, der seinen Standpunkt zum Thema KI in letzter Zeit verändert hat.
So unternahm Gabriel 2024 in einem Vortrag im Rahmen der 5. Staffel der Vortragsreihe *Zukunft denken* {% cite gabriel:2024 %} noch den Versuch, die Ontologie von *künstlich* und *Intelligenz* zu bestimmen und verteidigte die These:

>dass es keine Künstliche Intelligenz gibt. [...] Intelligenz und Denken sind die Fähigkeiten eines Lebewesens, die prinzipiell nicht in Systemen nachgebaut werden können, die nicht lebendig sind. Lebendigkeit ist eine notwendige Voraussetzung für das Vorliegen von Intelligenz. -- {% cite gabriel:2024 %}

Gabriel beginnt damit, einen Intelligenzbegriff zu postulieren, den er anschließend angreifen will.
Er sagt: Intelligenz wird fälschlicherweise als **die Fähigkeit zur Auflösung eines komplexen Verfahrens** bezeichnet
Er spricht dabei vom klassischen *algorithmischen Denken* oder *Computational Thinking*.
Es geht darum, ein Ziel---etwa sich einen Kaffee zu machen---in möglichst kurzer Zeit zu erreichen.
Der Zeitfaktor ist für Gabriel zentral.

Als Informatiker würde man jedoch nicht nur von Zeit sprechen, sondern von algorithmischer Komplexität.
Das bedeutet: Als intelligentes Lebewesen ist es mir möglich, denjenigen Algorithmus zu finden, der mich (a) zum Ziel bringt, (b) eine geringe algorithmische Komplexität aufweist und (c) den ich auch schnell (im Sinne von Zeit) ausführen kann.
Mehr Rechenleistung würde demnach auch meine Intelligenz erhöhen.

Unter diesem Verständnis wäre die *Singularität* längst erreicht, so Gabriel, denn viele Systeme wären bereits in vielerlei Hinsicht intelligenter als der Mensch.
Ein einfaches Auto wäre dann bereits in mancher Hinsicht intelligenter---es löst bestimmte Probleme (mich von A nach B zu bringen) schneller.

Gabriel führt anschließend die Idee von Bostrom und Chalmers aus, dass es zu einer "echten" Singularität käme, wenn Programme beginnen, sich selbst zu erzeugen und zu optimieren.
An dieser Stelle tritt also der Begriff der *Autopoiesis* ins Licht und nimmt man den Begriff ernst kann man dann nicht mehr von *künstlichen* Systemen sprechen, denn *Autopoiesis* schließt gerade den Designer aus.

>Dieses Szenario, [der autopoietischen Programme, die sich selbst optimieren], setzt voraus, dass die Systeme der Künstlichen Intelligenz überhaupt intelligent sind.
>Sonst könnten sie das Vergleichsmaß nicht ansetzen. Sie könnten nicht sagen: "Die sind in irgendetwas intelligenter als wir." -- {% cite gabriel:2024 %}

Auch hier nähert sich Gabriel interessanterweise dem systemischen Denken, denn das Vergleichsmaß zwischen "den KI-Systemen" und "uns" lässt sich auf die *System/Umwelt-Unterscheidung* übertragen.
Übersetzt meint Gabriel: Ein intelligentes System müsse zwischen sich und seiner Umwelt unterscheiden können.
Allerdings bleibt er in einer geteilten Realität stecken die einen einen Intelligenzvergleich möglich macht.

{% cite legg:2007 %} definieren *Intelligenz* als Erwartungswert eines durch $w(\mu)$ gewichteten Belohnungswerts über alle Umgebungen $\mathcal{E}$:

$$\text{Intelligenz}(\pi) = \sum_{\mu \in \mathcal{E}} w(\mu) V_\mu^\pi.$$

Eine mögliche Wahl für die Gewichtsfunktion ist $w(\mu) = 2^{-K(\mu)}$ wobei $K(\cdot)$ die 
Kolmogorov-Komplexität / Beschreibungslänge von $\mu$ ist.
Problematisch an dieser Definition könnte sein, dass die Umwelt $\mu$ und Agent als unabhängig zu sehen sind, also dass die Umwelt ein externer Prozess ist.
In Wirklichkeit wird ein Agent durch seine Umwelt mitgeformt (Körper, Kultur, Technik) und formt diese ebenfalls mit.
Auch ist die Umwelt durch einen Organismus mitbestimmt.
Was z. B. als Gift gilt hängt nicht nur vom Stoff ab sondern *wie* dieser verarbeitet wird.

Gabriel behauptet sodann, dass die von ihm skizzierte Künstliche Intelligenz bestenfalls ein *Denkmodell* sei und bezieht sich dabei auf Gottlob Frege {% cite frege:1892 %}:

>Sie (gemeint ist das Publikum) können sich etwas denken, zum Beispiel, dass Sie in Hamburg sind. In diesem Fall denken Sie etwas Wahres.
>Was Sie denken, ist als etwas Wahres ein Gedanke – nämlich ein Gedanke, der wahr ist.
>Ich denke das vielleicht anders als Sie, aber wir denken dasselbe, nämlich dass wir in Hamburg sind.
>Wäre das nicht so, könnten wir uns nicht über irgendetwas unterhalten. [...] Es gibt Objektivität. -- {% cite gabriel:2024 %}

Gabriel möchte damit zeigen, dass unser **Denken etwas Öffentliches ist**, um dann zu begründen, dass aus unserem öffentlichen Denken *Denkmodelle* gebaut werden. Diese Denkmodelle operieren auf der Grundlage der *Form des Denkens*, die Maschinen aus Daten extrahieren.
Diese Systeme studieren, wie jemand denkt, und können sodann vorhersagen, wie jemand denken wird. Unsere Gedanken sind das Futter der Systeme, die uns ausbeuten.

>Wir sind das digitale Proletariat. -- {% cite gabriel:2024 %}

Gabriel betont dann, dass diese Künstliche Intelligenz von Menschen produziert wurde, sie also *allopoetisch* sei.

>Die Produktionsvoraussetzungen der Hard- und Software sind immer noch ein Ausfluss der Vorstellungen, die ein Mensch sich davon macht, wer oder was er ist. -- {% cite gabriel:2024 %}

Die Maschinen werden "für uns" produziert. Die Vorstellung, es gehe auch ohne den Menschen, sei falsch, da die gesamte Infrastruktur menschliche Produkte sind, in die unsere Intelligenz eingespeist ist.
Gabriel behauptet:

>Wir werden durch diese Systeme intelligenter, nicht die Systeme selbst. -- {% cite gabriel:2024 %}

Er beharrt also darauf, dass sich eigentlich nur die *menschliche Intelligenz* hinter der Künstlichen Intelligenz versteckt.
Gabriel spricht dann sogar selbst in der Sprache der Systemtheorie, wenn er sagt, dass Lebewesen Zentren sind, die organisiert bleiben, und dass dies bedeutsam für jene Lebewesen sei. Er bezeichnet das als *ontologische Sonderstellung*.
Gabriel erkennt die existentialistische Seite unerer Existenz an in der die Zeit und der Tod wesentliche Sinngeber seien:

>Es ist Ihnen nicht unwichtig zu leben. [...] Und lebendige Systeme sind die Primärträger von Intelligenz, denn für lebendige Systeme spielt Zeit eine entscheidende Rolle, nämlich ihre Lebenszeit. Menschen sind nicht nur lebendige intelligente Systeme, sondern insbesondere lebendige intelligente Systeme, die sich über ein Bewusstsein davon, dass sie insbesondere lebendige intelligente Systeme sind, selbst steuern. [...] **Wir handeln im Licht einer Vorstellung dessen, was wir sind.** [...] Wir orientieren uns durch habitualisierte Denkmuster, und die sind der Träger von Intelligenz. Intelligenz entsteht in lebendigen Systemen relativ zum Druck und Drift der Evolution. [...] Lebendige Systeme aktivieren ihre Zustände immer im Hier und Jetzt. Was uns geschieht, geschieht uns immer nur einmal. [...] Wenn das der Maßstab von Intelligenz ist, dann ist klar, dass Ihr Smartphone nicht intelligent ist, denn es ist sehr schlecht im Überleben. Würde die Menschheit die ganze technische Wirklichkeit nicht länger verwenden, dann gäbe es sie auch nicht mehr. -- {% cite gabriel:2024 %}

Der Einfluss von Heidegger ist kaum zu übersehen.

Gabriel geht weiter darauf ein, dass Denken etwas Sensorisches sei, ähnlich wie Schmecken und Riechen. Das hat er in *Der Sinn des Denkens* {% cite gabriel:2018 %} genauer ausgeführt:

>Der Allgemeinsinn ist das Denken. Es ist der Umstand, dass wir wahre Gedanken denken können.
>Sie können mich sehen und hören und Sie wissen, dass es derselbe ist, der zu Ihnen spricht und den Sie sehen, weil Sie denken, dass ich es bin.
>Und ich denke dasselbe, und deshalb denken wir denselben Gedanken.
>Der Sinn des Denkens setzt uns in Kontakt mit dem Universum als Ganzem.
>Dieser Sinn des Denkens ist die eigentliche Quelle und die wahre Intelligenz. -- {% cite gabriel:2024 %}

Was Gabriel nach eigenen Aussagen heute beunruhigt, ist, dass KI-Systeme nicht länger nur vorhersagen, was z. B. der Kunde am wahrscheinlichsten als Nächstes kaufen möchte, sondern dass sie vorhersagen, welche Emotionen man als Nächstes haben wird.

>Die KI kann jedes Muster, das überhaupt irgendwo im Datensatz ist, im Grunde genommen erkennen und dann fortsetzen. -- {% cite gabriel:2025 %}

Und wenn ein Organismus bei genauer Betrachtung nichts anderes ist als eine Wiederholung von modulierten Mustern, dann kann die KI den Menschen besser "lesen", als es irgendeinem anderen System gelingen könnte.
Damit bringt Gabriel die Emotionalität in den Intelligenzbegriff hinein und verweist auf östliche Philosophien bzw. Kulturen, die sich gar nicht die Frage stellen, ob "in" der KI tatsächlich Emotionen entstehen.
Natürlich sei dies so, wenn es sich so anfühlt---weshalb einen Unterschied zwischen Fiktion und Realität einführen?

Gabriel gibt sehr ehrlich zu:

>Die Gewissheit der Unterscheidung zwischen Fiktion und Realität, die man scheinbar ganz einfach zieht, erodiert langsam.
>Ich verliere immer mehr von dieser westlichen Gewissheit, die mich die KI als tolles Instrument hat sehen lassen---aber sicher nicht als ein Gegenüber.
>Ich glaube, diese Auffassung ist falsch!
>Die KI ist ein echtes Gegenüber, aber natürlich kein menschliches Gegenüber. -- {% cite gabriel:2025 %}

Sein Zweifel schließt wohl auch den Unterschied zwischen *Denken* und *Denkmodell* ein.
Er betont die Unkontrollierbarkeit der KI-Systeme, denn die Tech-Konzerne können sie nicht gezielt emotional machen.
Vielmehr ist dies ein Zufallsprodukt oder ein kontingenter Prozess.

Anschließend bringt er den Turing-Test ins Spiel und widerspricht damit seinem Vortrag von 2024.
Sobald etwas als *intelligent* gilt, wenn es ein Mensch täte, es aber tatsächlich eine Maschine ist, dann sei es ebenso intelligent.

>Lange habe ich Turing belächelt, denn Turing glaubt, dass etwas intelligent ist, wenn es nur intelligent scheint.
>Aber das wirft doch die Frage auf, ob es wirklich intelligent ist. Und wieso hat dieser Turing bei seiner doch manifesten Hochbegabung das nicht gesehen?
>Aber er hat das wohl gesehen und Schein mit Sein gleichgesetzt. -- {% cite gabriel:2025 %}

Nach diesen Aussagen muss man sich fragen, was von Gabriels zuvor sehr selbstbewusstem Unterschied zwischen lebendigen intelligenten Systemen und nicht-intelligenten Maschinen übrig geblieben ist.

##

+ Was *ist* ChatGPT?
+ Ist es *intelligent*?
+ Kann es *verstehen*?
+ Besitzt es *eine Welt*?
+ Kann es sich *anpassen*?

Auf die Frage ob es eine *Starke KI* geben kann und ob wir diese bald erzeugen können oder ob diese bereits unter uns weilt scheint es keine naturalistische Antwort zu geben.
Zugleich ziehen wir als Hinweis für die Fähigkeiten einer KI den Vergleich zu den Fähigkeiten des Menschen.
So fragt evaluiert der Turingtest die Intelligenz einer Maschine dadurch, dass ein Mensch nicht mehr unterscheiden kann ob es sich um eine Maschine oder einen Menschen handelt.

In der Öffentlichkeit spekulieren hoch renomierte Forschende wie Hinton über Maschinen die nicht nur *intelligent* sind sondern auch *Bewusstsein* erlangt haben.
Wie wir KI beschreiben ändert auch unsere Selbstbeschreibung und hat Auswirkungen soziale Interaktionen und institutionelle Praktiken.

Durch die Beobachtung dieser Diskussion wurde uns klar, dass wir ein anderes Vokabular für die Beschreibung der Realität benötigen und durch den Begriff der *Künstlichen Kommunikation* sind wir schließlich auf Luhmanns Theorie der sozialen Systeme gestoßen, wodurch sich ein tiefer Kaninchenbau erschlossen hat.
Wir verallgemeinern die Benennung zu *Theorie der selbst-referenziellen Systeme*.
Es geht uns im Wesentlichen um die Auswahl von *passenderen Begriffen*---nicht zu verwechseln mit *korrekten Begriffen*.

## Wir müssen Vergessen

### Ein Kommentar zur Sprache

Bevor wir beginnen folgen wir Derrida in seiner Behauptung, dass "die Relität" keine feste Basis ist, auf die wir unsere Sprache abbilden.
Vielmehr ist Realität etwas, das nur **im Spiel der Zeichen** für uns Gestalt annimmt.
Sie hat eine Art *Widerständigkeit* (vgl. {% cite kant:1781 %}) (es ist nicht egal, ob wir gegen eine Wand laufen oder durch Luft), aber dieser Widerstand zeigt sich eben wieder in **sprachlichen und symbolischen Formen**.
*Bedeutung* entsteht bei Derrida durch ein endloses Spiel von *Differenzen* und *Verweisungen* zwischen Zeichen und Realität ist nicht "roh" zugänglich---sie erscheint für uns immer innerhalb dieser textuellen Vermittlungen.

Da mag man an Wittensteins Zitat aus dem Tractatus denken:

>Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt. -- {% cite wittgenstein:1921 %}

Doch Derrida lehnt die Idee ab, dass Sprache die Welt "abbildet".
Sprache ist kein **transparentes Medium**, sondern ein offenes Geflecht von Differenzen (différance).
Für ihn gibt es keine feste Grenze zwischen Sprache und Welt, weil das, was wir "Welt" nennen, selbst schon durch Zeichen und Diskurse strukturiert ist.

Deshalb können wir nicht behaupten die korrekten Begriffe gefunden zu haben aber wir können motivieren, dass wir Begriffe verschieben wollen, sodass sich auch die Welt verschiebt.

### Essentialismus

*Essentialismus* ist eine Denkweise, bei der man davon ausgeht, dass Dinge, Menschen oder Gruppen ein festes, unveränderliches *Wesen* oder eine *Essenz* besitzen, die ihr Verhalten, ihre Eigenschaften und ihren Wert bestimmt.
Wir fragen nach *"dem Wesen des Menschen"* oder *"dem Wesen der Technik"*.
Wir urteilen "Frauen seien von Natur aus fürsorglich", "Männner sind von Natur aus rational" oder "Asiaten sind gut in Mathe".
Kurz gesagt: Wir gehen von bestimmten Notwendigkeiten aus (notwendig im Sinne von einer *Not* die eine *Wende* herbeiführt).
Hegel verwandelte Kontingenz in Notwendigkeit; Luhmann verwandelt Notwendigkeit in Kontingenz.
Der Essentialismus fragt: Was *ist* etwas? Zum Beispiel: Was *ist* Gessellschaft im Kern; Was *ist* der Mensch? Was *ist* KI?
Der Essentialismus denkt in statischen Objekten und Eigenschaften.
Etwas *ist* jetzt so wie es gerade eben noch war.

Als Informatiker ist man durch den eigenen Sprachgebrauch schnell dabei essentialistisch zu denken.
Inbesondere wenn man die Mathematik metaphysisch ließt, also z.B. mit

$$\exists x \in M: P(x)$$

meint, dass es da draußen ein geheimnisvolles $x$ gibt, das schon immer so war, läuft man Gefahr in den Essentialismus zu laufen.
In der modernen Mathematik existiert allerdings etwas nur **modellabhängig** und damit unterlaufen wir den Essentialismus.

## Kontingenz statt Notwendigkeit

Die Systemtheorie ist *anti-essentialistisch*.
Sie fragt nicht nach dem Wesen der Dinge sondern nach dem Grund weshalb Identitäten bestehen bleiben.
Sie fragt nicht was die Gesellschaft *ist*, sondern wie sie *funktioniert* und wie sie sich *reproduziert*.
Sie behauptet nicht, dass die Dinge so sind weil sie so sein *müssen*.
Die Dinge sind wie sie sind, aber könnten auch anders sein (*Kontingenz*).

## Autopoiesis

Wann immer etwas (ein Organismus, eine Gesellschaft) bestand hat, entsteht der Verdacht, dass die ablaufenden Prozesse dafür sorgen, dass die Bedingungen für deren Wiederkehr garantiert wird.
Wir nennen dieses etwas *System*.
Systeme stabilisieren sich durch ihre Strukturen, aber diese sind historisch und wandelbar.
Sie sind nicht durch ein Wesen vorgegeben, sondern erzeugen (*poiesis*) sich selbst (*auto*).
Der Begriff *Autopoiesis* (wörtlich Selbstproduktion/-erzeugung/-schaffend) wurde von den chilenischen Forschern (auch bekannt als Santiago Schule der Biologie) für lebende Systeme (Organismen) in {% cite maturana:1973 %} wie folgt eingeführt:

>Eine autopoietische Maschine ist eine Maschine, die als ein *System von Produktionsprozessen* von Komponenten organisiert ist, die so miteinander verknüpft sind, dass sie Komponenten hervorbringen, welche:
>
>+ die die Prozesse (Beziehungen) der Produktion erzeugen, welche sie durch ihre fortwährenden Wechselwirkungen und Transformationen hervorbringen, und
>+ die die Maschine als eine *Einheit* im *physischen Raum* konstituieren.

Um Licht ins Dunkel dieser schwer zu entziffernden Definition zu bringen schlägt {% cite barry:2012 %} nun vor zwischen dem *System von Produktionsprozessen* $X$ und den *Komponenten* $Y$ unterscheiden und dann die Frage zu stellen ob $X = Y$ oder $Y \in X$ gilt.





## References

{% bibliography --cited %}
