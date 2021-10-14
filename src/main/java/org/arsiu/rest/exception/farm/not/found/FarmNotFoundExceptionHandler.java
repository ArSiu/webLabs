package org.arsiu.rest.exception.farm.not.found;

import org.arsiu.rest.exception.farm.FarmException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@ControllerAdvice
public class FarmNotFoundExceptionHandler {
    @ExceptionHandler(FarmNotFoundException.class)
    public ResponseEntity<Object> handleFarmNotFoundException(final FarmNotFoundException e) {
        FarmException farmException = new FarmException(
                e.getMessage(),
                HttpStatus.NOT_FOUND,
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(farmException, HttpStatus.NOT_FOUND);
    }
}
