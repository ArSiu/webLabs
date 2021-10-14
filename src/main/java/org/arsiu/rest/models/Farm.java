package org.arsiu.rest.models;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.*;

@Setter
@Getter
@NoArgsConstructor
@Entity

public class Farm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "Missing name")
    @Size(min=2, max=32)
    private String name;

    @NotNull(message = "Missing location")
    @Size(min=2, max=32)
    private String location;

    @NotNull(message = "Missing amountOfLivestock")
    @Min(1)
    @Max(999999)
    private int amountOfLivestock;

    @NotNull(message = "Missing powerOfVents")
    @Min(1)
    @Max(999999)
    private int powerOfVents;

    public Farm(final String namePar, final String locationPar, final int amountOfLivestockPar,
                final int powerOfVentsPar) {
        this.name = namePar;
        this.location = locationPar;
        this.amountOfLivestock = amountOfLivestockPar;
        this.powerOfVents = powerOfVentsPar;
    }

    public String objToString() {
        return "________________________"
                + "\n|Name: " + name
                + "|\n|Location: " + location
                + "|\n|Amount of live stock: " + amountOfLivestock
                + "|\n|Power of vents: " + powerOfVents;
    }

    @Override
    public String toString() {
        return objToString() + "|\n________________________\n";
    }

}
