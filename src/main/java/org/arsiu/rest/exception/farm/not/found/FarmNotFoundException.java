package org.arsiu.rest.exception.farm.not.found;

public class FarmNotFoundException extends RuntimeException{

    public FarmNotFoundException(final String message) {
        super(message);
    }

    public FarmNotFoundException(final String message, final Throwable cause) {
        super(message, cause);
    }
}
