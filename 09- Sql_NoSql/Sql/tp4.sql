/* Commande du tp4 */

// Q1
select * from client where prenom = 'Muriel' and password = sha1("test11");

// Q2 & Q3
select count(commande_id) as nbr_commande, nom 
from commande_ligne 
group by nom 
having nbr_commande > 1;

// Q4
update commande_ligne 
set prix_total = prix_unitaire * quantite;

// Q5
update commande as t1
inner join (
select sum(prix_total) as p_total, commande_id from commande_ligne t2 group by commande_id) as t2
on t1.id = t2.commande_id
set t1.cache_prix_total = t2.p_total;

// Q6

// Q7

// Q8

// Q9

// Q10

// Q11

// Q12

// Q13

// Q14