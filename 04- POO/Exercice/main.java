
class maison
{
    String numeroRue;
    String rue;
    String CodePostal;
    String Ville;
    String Pays;

    public maison(String numeroRue, String rue, String codePostal, String ville, String pays)
    {
        this.numeroRue = numeroRue;
        this.rue = rue;
        this.CodePostal = codePostal;
        this.Ville = ville;
        this.Pays = pays;
    }

    public maison(String numeroRue, String rue, String ville)
    {
        this.numeroRue = numeroRue;
        this.rue = rue;
        this.Ville = ville;
    }

    public maison()
    {
        
    }

    public static void main(String[] args)
    {
        maison maison = new maison("10", "Rue de Cassel", "59000", "Lille", "France");
        System.out.println(maison);
    }
}